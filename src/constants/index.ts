export const SLIDER_OPTIONS = {
    loop: true,
    slides: {
        perView: 16,
        spacing: 16,
    },
};

export const EMBED_PLAYER_PARAMS = {
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    controls: '0',
    modestBranding: '1',
    disablekb: '1',
    showInfo: "0",
    iv_load_policy: '3'
}

export const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
export const TMDB_POPULAR_URL = `https://api.themoviedb.org/3/movie/popular`;
export const TMDB_BASE_URL = `https://api.themoviedb.org/3/movie`;
export const TMDB_POSTER_URL = "https://image.tmdb.org/t/p/original";
export const EMBED_URL = `https://www.youtube.com/embed`;
