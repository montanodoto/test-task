import type { I_TMDBMovie } from "../../types/base.types";

export type T_CarouselProps = { items: I_TMDBMovie[]; onSlideClick: (props: any) => void };