import useFeaturedVideo from "./useFeaturedVideo";

import { TMDB_TOKEN } from "../../constants";

import type { TEmbedVideoPlayerProps } from "./types";

export default function EmbedPlayer({
    movieId,
    apiKey,
    bearerToken = TMDB_TOKEN,
    autoPlay = true,
    mute = true,
}: TEmbedVideoPlayerProps) {
    const { loading, error, videoKey, src } = useFeaturedVideo({ movieId, apiKey, bearerToken, mute, autoPlay })

    if (loading) return <div>Loading trailer…</div>;
    if (error) return <div style={{ color: "crimson" }}>Error: {error}</div>;
    if (!videoKey) return <div>No trailer available.</div>;

    return (
        <div style={{ position: "relative", left: '600px', top: 60 }}>
            <iframe
                src={src}
                title="Movie Trailer"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                    width: 600,
                    height: 300,
                    position: "absolute",
                    inset: 0,
                    border: 0,
                    borderRadius: 12
                }}
            />
        </div>
    );
}
