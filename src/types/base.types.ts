export interface I_TMDBMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string; // ISO date string
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    video_url: string;
}

export interface I_TMDBMovieListResponse {
    page: number;
    results: I_TMDBMovie[];
    total_pages: number;
    total_results: number;
}
