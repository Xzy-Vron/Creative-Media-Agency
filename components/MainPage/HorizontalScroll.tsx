import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HorizontalScroll.module.css";

export default function HorizontalScroll() {
  const wordRef = useRef(null);
  const outerDivRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  const cards = [
  { id: card1Ref, endTranslateX: -2000, rotate: 80 },
  { id: card2Ref, endTranslateX: -1000, rotate: -60 },
  { id: card3Ref, endTranslateX: -2000, rotate: 45   },
  { id: card4Ref, endTranslateX: -1500, rotate: -30 },
];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(wordRef.current, {
      translateX: "-335vw",
      duration: 1 ,

      scrollTrigger: {
        trigger: outerDivRef.current,
        start: "top top",
        end: `+=7000vh`,
        scrub: true,
        pin: true,
        markers: true,
        invalidateOnRefresh: true,
      },
    });

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card.id.current,
        start: "top top",
        end: `+=7000vh`,
        scrub: true,
        onUpdate: (e) => {
          gsap.to(card.id.current, {
            x: `${e.progress * card.endTranslateX}px`,
            rotate: `${e.progress * card.rotate * 2}`,
            duration: 0.5,
            ease: "power3.out"
          });
        }
      })
    })

  }, []);

  return (
    <div ref={outerDivRef} className={styles.outerDiv}>
      <div ref={wordRef} className={styles.innerDiv}>
        <h1>Creative Media Films</h1>

        <div ref={card1Ref} id={styles.cardOne} className={styles.card}>
             <img src="/5.webp" alt="card-1" />
           </div>
           <div ref={card2Ref} id={styles.cardTwo} className={styles.card}>
             <img src="/6.webp" alt="card-2" />
           </div>
           <div ref={card3Ref} id={styles.cardThree} className={styles.card}>
             <img src="/7.webp" alt="card-3" />
           </div>
           <div ref={card4Ref} id={styles.cardFour} className={styles.card}>
             <img src="/8.webp" alt="card-4" />
           </div>
      </div>
    </div>
  );
}
