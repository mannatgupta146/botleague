export interface JourneyStep {
    step: number;
    img: string;
    title: string;
}

export interface Category {
    id: number;
    img: string;
    title: string;
    description: string;
}

export interface Sport {
    id: number;
    img: string;
    name: string;
}

export interface Sponsor {
    id: number;
    img: string;
    name: string;
    alt: string;
    widthClass: string;
}

export interface UpcomingEvent {
    id: number;
    title: string;
    date: string;
    location: string;
    category: string;
}

export interface PastResult {
    id: number;
    title: string;
    winner: string;
}

export interface Advantage {
    id: number;
    title: string;
    description: string;
}
