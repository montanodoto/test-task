import { useEffect, useState } from "react";

import useDetails from "./useDetails";
import useHttpOptions from "./useHttpOptions";

import { EMBED_URL, TMDB_BASE_URL, TMDB_POPULAR_URL, TMDB_POSTER_URL } from "../constants";

import type { I_TMDBMovie, I_TMDBMovieListResponse } from "../types/base.types";

const get_video_url = (id: number) => `${TMDB_BASE_URL}/${id}/videos`;

export default function useMovies() {
    const [movies, set_movies] = useState<Array<I_TMDBMovie>>([])
    const [featured, set_featured] = useState<I_TMDBMovie>();
    const { featured_details } = useDetails(featured?.id);
    const options = useHttpOptions();

    useEffect(() => {
        const saved_featured = JSON.parse(localStorage.getItem('featured') as string);
        const found = movies.find((f: any) => f.id === saved_featured);

        (async () => {
            if (movies.length) {
                if (found) {
                    const request = await fetch(get_video_url(saved_featured), options);
                    const { results } = await request.json();
                    const url = `${EMBED_URL}/${results[0].key}`;
                    set_featured({ ...found, video_url: url });
                }
                else {
                    const request = await fetch(get_video_url(movies[0].id), options);
                    const { results } = await request.json();
                    const url = `${EMBED_URL}/${results[0].key}`;
                    set_featured({ ...movies[0], video_url: url });
                }
            }
        })()
    }, [movies]);


    useEffect(() => {
        (async () => {
            const request = await fetch(TMDB_POPULAR_URL, options);
            const response: I_TMDBMovieListResponse = await request.json();

            const mapped_response = response.results.map(mov => ({
                ...mov,
                backdrop_path: TMDB_POSTER_URL + mov.backdrop_path,
                poster_path: TMDB_POSTER_URL + mov.poster_path,
            }));

            set_movies(mapped_response);
        })();
    }, []);

    return { list: movies, featured, featured_details, set_featured };
}