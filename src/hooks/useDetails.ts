import { useEffect, useState } from "react";

import { TMDB_BASE_URL } from "../constants";

import useHttpOptions from "./useHttpOptions";

import type { I_TMDBMovieListResponse } from "../types/base.types";

export default function useDetails<T extends number>(id?: T) {
    const [featured_details, set_featured_details] = useState<any>();
    const options = useHttpOptions();

    useEffect(() => {
        if (id) {
            (async () => {
                const request = await fetch(`${TMDB_BASE_URL}/${id}`, options);
                const response: I_TMDBMovieListResponse = await request.json();
                set_featured_details(response);
            })();
        }
    }, [id]);

    return { featured_details };
}