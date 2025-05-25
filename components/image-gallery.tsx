"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
  width?: number
  height?: number
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: number
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openLightbox = (src: string) => {
    setSelectedImage(src)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  // Determine grid columns class based on prop
  const gridClass =
    {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    }[columns] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

  return (
    <>
      <div className={`grid ${gridClass} gap-4`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(image.src)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={index < 6 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
              <div className="p-4 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-serif font-bold">{image.alt}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-5xl w-full h-auto max-h-[90vh]">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] w-auto mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={closeLightbox}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
