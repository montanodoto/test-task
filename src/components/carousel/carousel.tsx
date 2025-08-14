import { useCallback } from 'react';
import { useKeenSlider } from 'keen-slider/react'

import AutoplayPlugin from './carousel.plugins';

import { CardHolder } from './carousel.styled';

import { SLIDER_OPTIONS } from '../../constants';

import type { I_TMDBMovie } from "../../types/base.types";
import type { T_CarouselProps } from './types';

export default function Carousel({ items, onSlideClick }: T_CarouselProps) {
    const [sliderRef] = useKeenSlider(SLIDER_OPTIONS, [AutoplayPlugin]);

    const handleSlideClick = useCallback(<T extends I_TMDBMovie>(item: T) =>
        onSlideClick(item), [onSlideClick]);

    return (
        <div ref={sliderRef} className="keen-slider">
            {items.map((it, idx) => (
                <CardHolder
                    key={it.id}
                    className={`keen-slider__slide number-slide${idx + 1}`}
                    title={it.title}
                    onClick={() => handleSlideClick(it)}
                >
                    <img
                        width={160}
                        height={240}
                        src={it.poster_path}
                        alt={it.title}
                        loading="lazy"
                    />
                </CardHolder>
            ))}
        </div>
    );
}
