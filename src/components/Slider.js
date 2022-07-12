import React, { useState } from "react";
import Card from "./Card";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    
    

    if (!Array.isArray(slides) || slides.length <= 0) {
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
            {slides.map((slide, idx) => {
                return (
                    <div key={idx} className={idx === current ? 'slide active' : 'slide'}>
                        {idx === current && 
                        <div>
                            <Card path={slide.img}
                                        alt={slide.alt}
                                        keypoints={slide.keypoints.map((point, idx) => {
                                            return <li key={idx}>{point}</li>
                                        })}
                                        title={slide.title}>
                            </Card>
                        </div>
                        }
                    </div>
                );
            })}
        </section>
    );
};

export default Slider;