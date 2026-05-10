import { NavbarInterface } from "./components/navbar";
import car from "./app/mock/mockcar.png"

interface dateTimeInterface {
    date: String,
    time: String
}

export interface BaseDataInterface {
    title: string,
    content: string,
    images: string[],
    dateTime: dateTimeInterface,
    link: string,
}

export interface UpcomingEventDataInterface extends BaseDataInterface {
    location: string,
}

interface LostAndFoundDataInterface extends BaseDataInterface{

}

export const NavigationData:NavbarInterface = {
    heading: "Student Union",
    subHeading: "Mae Fah Luang University",
    logo: "/logo/logo_3.png",
    linkItems: [
        {
            name: "Home",
            href: "/",
            target: undefined
        },
        {
            name: "Events",
            href: "/events",
            target: undefined
        },
        {
            name: "Lost & Found",
            href: "/lost-and-found",
            target: '_blank'
        },
        {
            name: "About",
            href: "",
            target: undefined
        },
    ],
}

export const UpcomingEventsData:UpcomingEventDataInterface[]  = [
    {
        title: "Student Night Market",
        content: "Student Night Market: A gathering place for food, drinks, clothes, accessories, and many other items. ",
        images: [
            "/img/events/1.png",
            "/img/events/1.1.JPG",
        ],
        dateTime: {
            date: "27 March 2026",
            time: "4:00 PM - 9:00 PM",
        },
        location: "M-Square Rooftop (L Park)",
        link: "#"
    },
    {
        title: "Graduation Ceremony",
        content: "Student Night Market: A gathering place for food, drinks, clothes, accessories, and many other items. ",
        images: [
            "/img/events/2.png",
            "/img/events/2.1.png",
        ],
        dateTime: {
            date: "27 March 2026",
            time: "4:00 PM - 9:00 PM",
        },
        location: "M-Square Rooftop (L Park)",
        link: "#"
    },
    {
        title: "Fight for Flag",
        content: "Student Night Market: A gathering place for food, drinks, clothes, accessories, and many other items. ",
        images: [
            "/img/events/3.png",
            "/img/events/3.1.png",
        ],
        dateTime: {
            date: "27 March 2026",
            time: "4:00 PM - 9:00 PM",
        },
        location: "M-Square Rooftop (L Park)",
        link: "#"
    },
]

export const LostAndFoundData:LostAndFoundDataInterface[] = [
    {
        title: "LostItemPlaceHolder",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae ipsa voluptas, sint odio architecto, optio est magnam minima, necessitatibus quidem error. Excepturi asperiores eos minima repellat non animi? Illum?",
        images: [],
        dateTime: {
            date: "27 March 2026",
            time: "4:00 PM - 9:00 PM",
        },
        link: "#",
    },
]   

export const ScrollIndicatorData = [
    { label: "Hero", start: 0, end: 0.14 },
    { label: "About", start: 0.14, end: 0.26 },
    { label: "Upcoming", start: 0.26, end: 0.37 },
    { label: "Past Events", start: 0.37, end: 0.68 },
    { label: "SU Store", start: 0.68, end: 0.80 },
    { label: "Lost and Found", start: 0.80, end: 0.96 },
    { label: "Footer", start: 0.96, end: 1 },
];

export const picturesData = [
    "/img/events/1.1.JPG",
    "/img/events/2.1.png",
    "/img/events/3.1.png",
    "/img/events/4.1.png",
]