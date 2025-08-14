import { useEffect, useMemo, useState } from "react";
import { EMBED_PLAYER_PARAMS } from "../../constants";

import type { TEmbedVideoPlayerProps, TMDBVideosResponse } from "./types";

const get_params = (autoPlay: boolean | undefined, mute: boolean | undefined) => ({
    autoplay: autoPlay ? "1" : "0",
    mute: mute ? "1" : "0",
    ...EMBED_PLAYER_PARAMS
})

export default function useFeaturedVideo({ movieId, apiKey, bearerToken, autoPlay, mute }: TEmbedVideoPlayerProps) {
    const [videoKey, setVideoKey] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const url = new URL(`https://api.themoviedb.org/3/movie/${movieId}/videos`);
                if (apiKey) url.searchParams.set("api_key", apiKey);

                const res = await fetch(url.toString(), {
                    headers: bearerToken
                        ? { Authorization: `Bearer ${bearerToken}` }
                        : undefined,
                });

                if (!res.ok) throw new Error(`TMDB error ${res.status}`);

                const data = (await res.json()) as TMDBVideosResponse;
                const best = data.results[0];
                if (!best) throw new Error("No playable YouTube trailer found");

                if (!cancelled) setVideoKey(best.key);
            } catch (e: any) {
                if (!cancelled) setError(e.message || "Failed to load trailer");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [movieId, apiKey, bearerToken]);

    const src = useMemo(() => {
        if (!videoKey) return "";
        const params = get_params(autoPlay, mute);
        const embed_params = new URLSearchParams(params).toString();
        return `https://www.youtube.com/embed/${videoKey}?${embed_params}`;
    }, [videoKey, autoPlay, mute]);

    return { videoKey, loading, error, src }
}