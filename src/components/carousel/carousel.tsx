import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import type { T_CarouselProps } from './types';

export default function Carousel({ items, onSlideClick }: T_CarouselProps) {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 16,
                spacing: 16,
            },
        }
    );

    return (
        <div ref={sliderRef} className="keen-slider">
            {items.map((it, idx) => (
                <div
                    className={`keen-slider__slide number-slide${idx + 1}`}
                    title={it.Title}
                    onClick={() => onSlideClick(it)}
                >
                    <img
                        src={it.CoverImage}
                        alt={it.Title}
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}
