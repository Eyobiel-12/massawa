"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  asChild?: boolean
}

export default function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  type = "button",
  disabled = false,
  asChild = false,
}: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
      <Button
        className={cn(className)}
        variant={variant}
        size={size}
        onClick={onClick}
        type={type}
        disabled={disabled}
        asChild={asChild}
      >
        {children}
      </Button>
    </motion.div>
  )
}
