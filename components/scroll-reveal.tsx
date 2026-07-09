'use client'

import React from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right" | "none"
type Easing = [number, number, number, number] | "easeOut" | "easeInOut" | "linear"

export interface ScrollRevealProps {
  children: React.ReactNode
  direction?: Direction
  duration?: number
  delay?: number
  distance?: number
  once?: boolean
  threshold?: number
  className?: string
  as?: "div" | "section" | "span" | "article"
  easing?: Easing
  stagger?: boolean
  staggerDelay?: number
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { y: 0, x: 1 },
  right: { y: 0, x: -1 },
  none: { y: 0, x: 0 },
}

export function ScrollReveal({
  children,
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 60,
  once = true,
  threshold = 0.15,
  className,
  as: Tag = "div",
  easing = "easeOut",
  stagger = false,
  staggerDelay = 0.1,
}: ScrollRevealProps) {
  const offset = directionOffset[direction]

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x * distance, y: offset.y * distance },
    visible: stagger
      ? {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { staggerChildren: staggerDelay, delayChildren: delay },
        }
      : {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay, ease: easing },
        },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, x: offset.x * distance, y: offset.y * distance },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: easing },
    },
  }

  const MotionTag = motion[Tag]

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      className={cn(className)}
    >
      {stagger
        ? React.Children.map(children as React.ReactElement[], (child) => (
            <motion.div variants={childVariants}>{child}</motion.div>
          ))
        : children}
    </MotionTag>
  )
}
