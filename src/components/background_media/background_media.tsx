import { useEffect, useRef } from "react";

import { Layer, Vid } from "./background_media.styled";

import type { T_BackgroundMediaProps } from "./types";

export default function BackgroundMedia({ backdrop, videoUrl, showVideo }: T_BackgroundMediaProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const canPlayVideo = Boolean(videoUrl && showVideo);

    useEffect(() => {
        const el = videoRef.current;
        if (!el || !canPlayVideo) return;

        const tryPlay = async () => {
            try {
                el.currentTime = 0;
                await el.play();
            } catch (e) {
                console.warn("Autoplay failed:", e);
            }
        };
        tryPlay();

        return () => {
            el.pause();
            el.removeAttribute("src");
            el.load();
        };
    }, [canPlayVideo]);

    return (
        <Layer>
            {canPlayVideo && (
                <Vid
                    ref={videoRef}
                    src={"/vid.mp4"}
                    muted
                    loop
                    autoPlay
                    playsInline
                    poster={backdrop}
                />
            )}
        </Layer>
    );
}

