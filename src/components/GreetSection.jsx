import { useState, useEffect } from 'react';
import scrollDownLogo from '../assets/down-arrow.png'
import '../styles/GreetSection.css'

export default function GreetSection () {
  const greetings = ["HI,", "Im", "Ferin", "Sharaf"];
  const [visibleCount, setVisibleCount] = useState(0);
  const [showScroller, setShowScroller] = useState(true);
  console.log(showScroller)

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
      <section id='greeter-scroller'>
        <p className="greet-scroll-text">
          Scroll Down
        </p>
        <img src={scrollDownLogo} alt="scroll down logo" />
      </section>
    </section>
  )
}