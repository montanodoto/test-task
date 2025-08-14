import { useMemo } from "react";

import { get_request_params } from "../utils/get_request_params";
import { TMDB_TOKEN } from "../constants";

export default function useHttpOptions() {
    return useMemo<any>(() => get_request_params("Authorization", `Bearer ${TMDB_TOKEN}`), []);

}