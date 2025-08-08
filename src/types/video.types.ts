export type T_VideoItem = {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    Description: string;
    VideoUrl?: string;
};

export type T_VideoResponse = {
    Featured: T_VideoItem;
    TendingNow: T_VideoItem[];
}

export type T_GetVideos = {
    featured: T_VideoItem,
    trending: T_VideoItem[],
}