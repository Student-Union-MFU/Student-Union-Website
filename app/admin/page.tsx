"use client";
import { useEffect, useState } from "react";
import { VerticalCard } from "@/components/card";
import { useLenis } from "@/components/scrollsmoother";

interface EventImage {
  id: number;
  event_id: number;
  url: string;
  position: number;
}

interface Event {
  id: number;
  title: string;
  content: string;
  location: string;
  date: string;
  time: string;
  link: string;
  created_at: string;
  images: EventImage[];
}

const API_URL = "http://localhost:8080/su-server";
const JWT_TOKEN = "#";

const emptyForm = {
  title: "",
  content: "",
  location: "",
  date: "",
  time: "",
  link: "",
  images: [] as { url: string; position: number }[],
};

export default function AdminPage() {
  const [form, setForm] = useState(emptyForm);
  const [imageUrl, setImageUrl] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"create" | "list">("create");

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_URL}/events`, {
        headers: { Authorization: `Bearer ${JWT_TOKEN}` },
      });
      const data = await res.json();
      setEvents(data);
    } catch {
      setMessage("Failed to fetch events");
    }
  };

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch(`${API_URL}/events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMessage("Event created successfully");
      setForm(emptyForm);
    } catch {
      setStatus("error");
      setMessage("Failed to create event");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this event?")) return;
    try {
      await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${JWT_TOKEN}` },
      });
      setEvents((prev) => prev.filter((e) => e.id !== id));
    } catch {
      setMessage("Failed to delete event");
    }
  };

  const addImage = () => {
    if (!imageUrl.trim()) return;
    setForm((prev) => ({
      ...prev,
      images: [...prev.images, { url: imageUrl, position: prev.images.length }],
    }));
    setImageUrl("");
  };

  const removeImage = (index: number) => {
    setForm((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const fields = [
    { label: "Title", key: "title", type: "text" },
    { label: "Location", key: "location", type: "text" },
    { label: "Date", key: "date", type: "date" },
    { label: "Time", key: "time", type: "text" },
    { label: "Link", key: "link", type: "url" },
  ];

  useEffect(() => {
    console.log(events)
  },[events])

  const lenis = useLenis();
  useEffect(() => {
    lenis?.resize();
  }, [events]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-neutral-800 px-8 py-4 flex items-center gap-3">
        <span className="font-bold text-lg tracking-wide">SU</span>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-500 text-sm">admin</span>
        <span className="text-neutral-600">/</span>
        <span className="text-neutral-500 text-sm">events</span>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-1 border-b border-neutral-800 mb-8">
          {(["create", "list"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); if (tab === "list") fetchEvents(); }}
              className={`px-4 py-2 text-xs tracking-widest uppercase -mb-px transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-neutral-200 text-neutral-500"
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Status message */}
        {message && (
          <div className={`px-4 py-3 rounded text-sm mb-6 border ${
            status === "success"
              ? "bg-green-200 text-green-900 border-green-900"
              : "bg-red-200 text-red-900 border-red-900"
          }`}>
            {message}
          </div>
        )}

        {/* Create Tab */}
        {activeTab === "create" && (
          <div className="flex flex-col gap-5">
            <p className="text-xs tracking-widest uppercase mb-2">New Event</p>

            {fields.map(({ label, key, type }) => (
              <div key={key}>
                <label className="block text-xs mb-2 tracking-widest uppercase">
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key as keyof typeof form] as string}
                  onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                  className="w-full border border-neutral-800 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                />
              </div>
            ))}

            {/* Content */}
            <div>
              <label className="block text-xs mb-2 tracking-widest uppercase">
                Content
              </label>
              <textarea
                value={form.content}
                onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
                rows={5}
                className="w-full border border-neutral-800 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-neutral-600 transition-colors resize-y"
              />
            </div>

            {/* Images */}
            <div>
              <label className="block text-xs text-neutral-500 mb-2 tracking-widest uppercase">
                Images
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="flex-1 border border-neutral-800 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-neutral-600 transition-colors"
                />
                <button
                  onClick={addImage}
                  className="px-4 py-2 hover:bg-neutral-700 border border-neutral-700 rounded text-sm transition-colors"
                >
                  Add
                </button>
              </div>
              {form.images.length > 0 && (
                <div className="mt-2 flex flex-col gap-1">
                  {form.images.map((img, i) => (
                    <div key={i} className="flex items-center gap-3 px-3 py-2 bg-neutral-200 border border-neutral-400 rounded">
                      <span className="flex-1 text-xs truncate">{img.url}</span>
                      <button onClick={() => removeImage(i)} className="text-neutral-600 hover:text-red-400 transition-colors text-lg leading-none">×</button>
                    </div>
                  ))}
                </div>
              )}

              {/* Card preview using VerticalCard */}
              {form.images.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs tracking-widest uppercase mb-3">Card Preview</p>
                  <VerticalCard
                    link="#"
                    image={form.images[0].url}
                  >
                    <div className="flex flex-col w-full h-full justify-center text-xs">
                      <h3 className="w-full h-fit text-xl">{form.title || "Event title"}</h3>
                      <div className="flex flex-col w-full h-fit">
                        <p>{form.content || "Event description"}</p>
                        <p className="flex items-center w-full gap-2 mt-3">
                          📍 {form.location || "Location"}
                        </p>
                        <div className="border-t border-neutral-500 my-4" />
                        <div className="flex justify-between w-full h-fit">
                          <p>{form.date || "Date"}</p>
                          <p>{form.time || "Time"}</p>
                        </div>
                      </div>
                    </div>
                  </VerticalCard>
                </div>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="mt-2 self-start px-6 py-2.5 bg-neutral-200 hover:bg-white text-neutral-950 text-sm font-bold tracking-wide rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Creating..." : "Create Event"}
            </button>
          </div>
        )}

        {/* List Tab */}
        {activeTab === "list" && (
          <div>
            <p className="text-xs text-neutral-600 tracking-widest uppercase mb-6">All Events</p>
            {events.length === 0 ? (
              <div className="text-neutral-600 text-sm text-center py-16">No events found</div>
            ) : (
              <div className="flex flex-col gap-8">
                {events.map((event) => (
                  <div key={event.id} className="flex gap-6 items-start">
                    {/* VerticalCard preview */}
                    <div className="w-65 shrink-0">
                      <VerticalCard
                        link="#"
                        image={event.images?.at(0)?.url || "/img/MockPoster.png"}
                      >
                        <div className="flex flex-col w-full h-full justify-center text-xs">
                          <h3 className="w-full h-fit text-base font-semibold">{event.title}</h3>
                          <div className="flex flex-col w-full h-fit">
                            <p className="flex items-center w-full gap-2 mt-2">
                              📍 {event.location}
                            </p>
                            <div className="border-t border-neutral-500 my-3" />
                            <div className="flex justify-between w-full h-fit">
                              <p>{event.date}</p>
                              <p>{event.time}</p>
                            </div>
                          </div>
                        </div>
                      </VerticalCard>
                    </div>

                    {/* Info + delete */}
                    <div className="flex-1 min-w-0 pt-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <span className="text-xs text-neutral-600">Event ID: #{event.id}</span>
                          <div className="text-sm font-semibold truncate mt-1">Event Title: {event.title}</div>
                          <div className="text-xs text-neutral-500 mt-1">Event Date and Time: {event.date} · {event.time}</div>
                          <div className="text-xs text-neutral-500">Event Location: {event.location}</div>
                          <div className="text-xs text-neutral-500">Event Created At: {event.created_at}</div>
                        </div>
                        <button
                          onClick={() => handleDelete(event.id)}
                          className="shrink-0 px-3 py-1.5 border border-red-900 text-red-400 hover:bg-red-950 text-xs rounded transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}