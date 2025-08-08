import {
    Search,
    Home,
    Clapperboard,
    Film,
    Shapes,
    Clock3,
    HelpCircle,
    Globe,
    LogOut
} from "lucide-react";

export type Item = {
    key: string;
    icon: React.ComponentType<{ size?: number }>;
    label: string;
    href?: string;
};

export const TOP_ITEMS: Item[] = [
    { key: "search", icon: Search, label: "Search" },
    { key: "home", icon: Home, label: "Home" },
    { key: "tv", icon: Clapperboard, label: "TV Shows" },
    { key: "movies", icon: Film, label: "Movies" },
    { key: "genres", icon: Shapes, label: "Genres" },
    { key: "watch-later", icon: Clock3, label: "Watch Later" },
];

export const BOTTOM_ITEMS: Item[] = [
    { key: "lang", icon: Globe, label: "Language" },
    { key: "help", icon: HelpCircle, label: "Get Help" },
    { key: "exit", icon: LogOut, label: "Exit" },
];