"use client"

import Hero from "@/components/MainPage/Hero"
import { useRouter } from "next/navigation"
import { useState } from "react";
import ZoomParallax from "@/components/MainPage/ZoomParallax";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function GalleryDetail() {
  const router = useRouter()
  const [isFadingOut, setIsFadingOut] = useState(false)

  const handleBack = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      router.back()
    }, 600)
  }

  useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time : number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
  },[]);

  return (
    <main
      className={`min-h-screen bg-black transition-opacity duration-600 animate-fade-in ${isFadingOut ? "opacity-0" : "opacity-100"}`}
    >
      <Hero />
      <ZoomParallax />
      
      {/* <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">Gallery Detail</h1>
          <p className="text-gray-400 mb-8 text-lg">This page opens with the same background color as the canvas</p>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-white text-black font-mono font-semibold rounded hover:bg-gray-200 transition-colors"
          >
            ← Back to Gallery
          </button>
        </div>
      </div> */}
    </main>
  )
}
