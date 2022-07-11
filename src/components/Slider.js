import React, { useState } from "react";
import Card from "./Card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Slider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    const nextSlideHandler = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlideHandler = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlideHandler} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlideHandler} />
            {props.slides.map((slide, idx) => {
                return (
                    <div key={idx} className={idx === current ? 'slide active' : 'slide'}>
                        {idx === current && <Card img={slide.src} hints="hello">
                            <div></div>
                        </Card> }
                    </div>
                );
            })}
        </section>
    );
};

export default Slider;