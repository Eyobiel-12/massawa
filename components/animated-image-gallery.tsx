"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface GalleryImage {
  src: string
  alt: string
  width?: number
  height?: number
  category?: string
}

interface AnimatedImageGalleryProps {
  images: GalleryImage[]
  columns?: number
}

export default function AnimatedImageGallery({ images, columns = 3 }: AnimatedImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (src: string, index: number) => {
    setSelectedImage(src)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedIndex(null)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedIndex === null) return

    let newIndex: number
    if (direction === "next") {
      newIndex = (selectedIndex + 1) % images.length
    } else {
      newIndex = (selectedIndex - 1 + images.length) % images.length
    }

    setSelectedIndex(newIndex)
    setSelectedImage(images[newIndex].src)
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
      <motion.div
        className={`grid ${gridClass} gap-4`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(image.src, index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading={index < 6 ? "eager" : "lazy"}
            />
            <motion.div
              className="absolute inset-0 bg-black/0 flex items-end"
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="p-4 w-full text-white"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="font-serif font-bold">{image.alt}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/0 z-50 flex items-center justify-center p-4"
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            onClick={closeLightbox}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative max-w-5xl w-full h-auto max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={selectedIndex !== null ? images[selectedIndex].alt : "Gallery image"}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] w-auto mx-auto"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Navigation buttons */}
              <motion.button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("prev")
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </motion.button>

              <motion.button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage("next")
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </motion.button>

              <motion.button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={closeLightbox}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
              </motion.button>

              {/* Caption */}
              {selectedIndex !== null && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-serif font-bold text-lg">{images[selectedIndex].alt}</h3>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
