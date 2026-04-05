import { NavbarInterface } from "./components/navbar";
import car from "./app/mock/mockcar.png"

interface BaseDataInterface {
    title: string,
    content: string,
    images: string[],
    dateTime: string
    link: string
}

interface UpcomingEventDataInterface extends BaseDataInterface {}

interface LostAndFoundDataInterface extends BaseDataInterface{

}

export const NavigationData:NavbarInterface = {
    heading: "Student Union",
    subHeading: "Mae Fah Luang University",
    logo: "/logo/logo_3.png",
    linkItems: [
        {
            name: "Events",
            href: "/events",
        },
        {
            name: "Lost & Found",
            href: "/lost-and-found",
        },
        {
            name: "Gallery",
            href: "",
        },
        {
            name: "About",
            href: "",
        },
    ],
}

export const UpcomingEventsData:UpcomingEventDataInterface[]  = [
    {
        title: "EventPlaceHolder",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae ipsa voluptas, sint odio architecto, optio est magnam minima, necessitatibus quidem error. Excepturi asperiores eos minima repellat non animi? Illum?",
        images: [
            "./app/mock/mockcar2.png",
        ],
        dateTime: "4.3.2026",
        link: "#"
    },
    {
        title: "EventPlaceHolder",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae ipsa voluptas, sint odio architecto, optio est magnam minima, necessitatibus quidem error. Excepturi asperiores eos minima repellat non animi? Illum?",
        images: [],
        dateTime: "4.3.2026",
        link: "#"
    },
    {
        title: "EventPlaceHolder",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae ipsa voluptas, sint odio architecto, optio est magnam minima, necessitatibus quidem error. Excepturi asperiores eos minima repellat non animi? Illum?",
        images: [],
        dateTime: "4.3.2026",
        link: "#"
    },
    {
        title: "EventPlaceHolder",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae ipsa voluptas, sint odio architecto, optio est magnam minima, necessitatibus quidem error. Excepturi asperiores eos minima repellat non animi? Illum?",
        images: [],
        dateTime: "4.3.2026",
        link: "#"
    },
]

export const LostAndFoundData:LostAndFoundDataInterface[] = [
    {
        title: "LostItemPlaceHolder",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae ipsa voluptas, sint odio architecto, optio est magnam minima, necessitatibus quidem error. Excepturi asperiores eos minima repellat non animi? Illum?",
        images: [],
        dateTime: "4.3.2026",
        link: "#"
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