import { NavbarInterface } from "./components/navbar";
import car from "./app/mock/mockcar.png"

interface dateTimeInterface {
    date: string,
    time: string
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
            name: "nav.home",
            href: "/",
            target: undefined
        },
        {
            name: "nav.events",
            href: "/events",
            target: undefined
        },
        {
            name: "nav.lostFound",
            href: "/lost-and-found",
            target: '_blank'
        },
        {
            name: "su_store.su",
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

export const LostAndFoundData: LostAndFoundDataInterface[] = [
    {
        title: "Blue Backpack",
        content: "Found a blue North Face backpack near the SU Store. Contains some notebooks and a water bottle. Please contact the front desk to claim.",
        images: ["/img/lostnfound/item1.png"],
        dateTime: {
            date: "10 May 2026",
            time: "10:30 AM",
        },
        link: "#",
    },
    {
        title: "National ID Card",
        content: "Found an ID card belonging to 'xxxx'. Located at the cafeteria entrance.",
        images: ["/img/lostnfound/item2.png"],
        dateTime: {
            date: "07 May 2026",
            time: "12:00 PM",
        },
        link: "#",
    },
    {
        title: "iPhone 15 Pro Max",
        content: "Left on a table in the Main Hall during the 'Upcoming Events' presentation. The lock screen has a photo of a cat.",
        images: ["/images/lost/phone.jpg"],
        dateTime: {
            date: "09 May 2026",
            time: "2:15 PM",
        },
        link: "/img/lostnfound/item1.png",
    },
    {
        title: "Car Keys / กุญแจรถ / ကားသော့",
        content: "Found a set of Toyota car keys in the parking lot area. Attached to a 'SU Store' keychain.",
        images: ["/images/lost/keys.jpg"],
        dateTime: {
            date: "08 May 2026",
            time: "5:45 PM",
        },
        link: "/claims/003",
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