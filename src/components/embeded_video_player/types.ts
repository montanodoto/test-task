export type TEmbedVideoPlayerProps = {
    movieId: number | string;
    apiKey?: string;
    bearerToken?: string;
    autoPlay?: boolean;
    mute?: boolean;
}

export type TMDBVideo = {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: "YouTube" | "Vimeo" | string;
    size: number;
    type: "Trailer" | "Teaser" | "Clip" | string;
    official: boolean;
    published_at: string;
};

export type TMDBVideosResponse = {
    id: number;
    results: TMDBVideo[];
};