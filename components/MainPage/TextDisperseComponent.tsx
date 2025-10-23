'use client';
import styles from './TextDisperseComponent.module.css'
import TextDisperse from "./TextDisperse";
import { useRef } from 'react';
import gsap from "gsap";

export default function TextDisperseComponent() {

  const background = useRef(null);

  const setBackground = (isActive: boolean) => {
    gsap.to(background.current, {opacity: isActive ? 0.8 : 0})
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>

        <div className='introLine'>
          <p>Creative</p>
          <p>Media</p>
        </div>

        <div className='introLine'>
          <p>Films</p>
          <p>&</p>
        </div>

        <div className='introLine'>
          <p>Tushar </p>
          <p>Dangale</p>
        </div>

        <div className='introLine'>
          <TextDisperse setBackground={setBackground}>
          <p>+447533063596</p>
          </TextDisperse>

        </div>

        <div className='introLine'>
          <TextDisperse setBackground={setBackground}>
          <p>→Email</p>
          </TextDisperse>

        </div>

        <div className='introLine'>
          <TextDisperse setBackground={setBackground}>
          <p>→Insta</p>
          </TextDisperse>
        </div>

      </div>
      <div ref={background} className={styles.background}></div>
    </main>
  )
}