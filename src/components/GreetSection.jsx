import { useState, useEffect } from 'react';
import { keyframes, styled } from "styled-components"
import scrollDownLogo from '../assets/down-arrow.png'
import '../styles/GreetSection.css'

export default function GreetSection ({ scrollProgress }) {
    // const animate = scrollProgress > 0.3
    
    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

    const scale = Math.max(1 - scrollProgress * 0.8, 0.2);
    const opacity = Math.max(1 - scrollProgress * 1.5, 0);
    // console.log("s: ", scale)

    const greetings = ["HI,", "Im", "Ferin", "Sharaf"];
    const [visibleCount, setVisibleCount] = useState(0);
    
    useEffect(() => {    
        const animDur = 8;

        const interval = setInterval(() => {
        setVisibleCount((prev) => {
            if (prev === greetings.length) {
            clearInterval(interval);
            return prev;
            }
            return prev + 1;
        })
        }, animDur);

        return () => {
        clearInterval(interval);
        };
    }, [])


    return (
        <section id="greeter-section">
        <section id="greeter-text">
            {greetings.slice(0, visibleCount).map((text, index) => (
            <section key={index} className="greet-element">
                {text}
            </section>
            ))}
        </section>
        <section 
            id='greeter-scroller'
            style={{ 
                transform: `scale(${scale})`,
                opacity: opacity,
                
            }}
        >
            <p className="greet-scroll-text">
            Scroll Down
            </p>
            <img src={scrollDownLogo} alt="scroll down logo" />
        </section>
        {/* <GreetScrollbar /> */}
        </section>
    )
}
