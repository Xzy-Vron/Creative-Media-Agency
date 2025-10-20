"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import InfiniteGallery from "@/components/IntroPage/InfiniteGallery"

export default function Home() {
  const router = useRouter()
  const [isFadingOut, setIsFadingOut] = useState(false)

  const sampleImages = [
    { src: "/1.webp", alt: "Image 1" },
    { src: "/2.webp", alt: "Image 2" },
    { src: "/3.webp", alt: "Image 3" },
    { src: "/4.webp", alt: "Image 4" },
    { src: "/5.webp", alt: "Image 5" },
    { src: "/6.webp", alt: "Image 6" },
    { src: "/7.webp", alt: "Image 7" },
    { src: "/8.webp", alt: "Image 8" },
  ]

  const handleCanvasClick = () => {
    setIsFadingOut(true)
    setTimeout(() => {
      router.push("/gallery-detail")
    }, 600) // Match the fade-out animation duration
  }

  return (
    <main className="min-h-screen animate-fade-in">
      <div className={`transition-opacity duration-600 ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
        <div onClick={handleCanvasClick} className="cursor-pointer">
          <InfiniteGallery
            images={sampleImages}
            speed={1.2}
            zSpacing={3}
            visibleCount={12}
            falloff={{ near: 0.8, far: 14 }}
            className="h-screen w-full rounded-lg overflow-hidden"
          />
        </div>
        <div className="h-screen inset-0 pointer-events-none fixed flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
          <h1 className="font-serif text-4xl md:text-7xl tracking-tight">
            <span className="italic">I create;</span> therefore I am
          </h1>
        </div>

        <div className="text-center fixed bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
          <p>Use mouse wheel, arrow keys, or touch to navigate</p>
          <p className=" opacity-60">Auto-play resumes after 3 seconds of inactivity</p>
        </div>
      </div>
    </main>
  )
}
