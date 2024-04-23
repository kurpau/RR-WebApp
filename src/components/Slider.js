import React, { useState } from "react";
import Card from "./Card";

const Slider = ({ slides, snr }) => {
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
        <div className="slider">
            {slides.map((slide, idx) => {
                return (
                    <div key={idx} className={idx === current ? 'slide active' : 'slide'}>
                        {idx === current && 
                            <Card path={slide.img}
                                        progression={`Progression ${idx+1}/${length}`}
                                        alt={slide.alt}
                                        snr={snr}
                                        keypoints={slide.keypoints.map((point, idx) => {
                                            return <li key={idx}>{point}</li>
                                        })}
                                        title={slide.title}>
                                <button onClick={prevSlideHandler} className="left-arrow"><span class='left-arrow-icon'>&#x3c;</span></button>
                                <button onClick={nextSlideHandler} className="right-arrow"><span class='right-arrow-icon'>&#x3e;</span></button>
                            </Card>
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
