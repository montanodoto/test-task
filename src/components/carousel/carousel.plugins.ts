import { type KeenSliderInstance } from 'keen-slider/react'

export default function AutoplayPlugin<T extends KeenSliderInstance>(slider: T, interval = 1300) {
    let timeout: any;
    let mouse_over = false

    const clear_next_timeout = () => clearTimeout(timeout);

    const next_timeout = () => {
        clearTimeout(timeout)
        if (mouse_over) return
        timeout = setTimeout(() => slider.next(), interval)
    }

    const on_created = () => {
        slider.container.addEventListener("mouseover", () => {
            mouse_over = true
            clear_next_timeout()
        })
        slider.container.addEventListener("mouseout", () => {
            mouse_over = false
            next_timeout()
        })
        next_timeout()
    };

    slider.on("created", on_created)
    slider.on("dragStarted", clear_next_timeout)
    slider.on("animationEnded", next_timeout)
    slider.on("updated", next_timeout)
}