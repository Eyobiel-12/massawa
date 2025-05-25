"use client"

import { motion, type Variant } from "framer-motion"
import type { ReactNode } from "react"

type AnimationVariant = "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scale" | "none"

interface MotionWrapperProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}

export default function MotionWrapper({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  amount = 0.3,
}: MotionWrapperProps) {
  // Define animation variants
  const variants: Record<AnimationVariant, { initial: Variant; animate: Variant }> = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration, delay } },
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    slideRight: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    slideLeft: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    none: {
      initial: {},
      animate: {},
    },
  }

  const selectedVariant = variants[variant]

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount }}
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  )
}
