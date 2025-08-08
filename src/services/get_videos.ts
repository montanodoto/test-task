import type { T_VideoResponse, T_GetVideos } from "../types/video.types";


const default_state = {
    featured: [],
    trending: [],
}

export default async function Get_Videos(): Promise<T_GetVideos> {
    try {
        const request = await fetch("../data.json", { cache: "no-store" });

        if (!request.ok) throw new Error(`Failed to load videos.json: ${request.status}`);

        const { Featured, TendingNow }: T_VideoResponse = await request.json();

        const sorted_videos = TendingNow.sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime());

        return {
            featured: Featured,
            trending: sorted_videos,
        }
    } catch (error) {
        console.trace(error);
        console.error(error);

        return default_state as any;
    }
}
