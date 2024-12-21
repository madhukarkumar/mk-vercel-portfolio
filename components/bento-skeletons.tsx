"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const SkeletonOne: React.FC = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
        <Image
        src="/substack-image.png?height=400&width=600"
        alt="Skeleton Three Placeholder"
        width={600}
        height={400}
        className="h-full w-full rounded-lg object-cover"
      />
    </motion.div>
  )
}

export const SkeletonTwo: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 p-4">
      <motion.ul
        className="list-disc list-inside space-y-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <p className="text-xs text-neutral-500"></p>
        <motion.li className="text-sm" variants={itemVariants}>Ridethehype - (Code) AI startups leaderboard</motion.li>
        <motion.li className="text-sm" variants={itemVariants}>Multi-Agent RAG Starter - Code</motion.li>
        <motion.li className="text-sm" variants={itemVariants}>Billboard on 101 - Creative</motion.li>
      </motion.ul>
    </div>
  )
}

export const SkeletonThree: React.FC = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <Image
        src="/podcast.png?height=400&width=600"
        alt="Skeleton Three Placeholder"
        width={600}
        height={400}
        className="h-full w-full rounded-lg object-cover"
      />
    </motion.div>
  )
}

export const SkeletonFour: React.FC = () => {
  const first = {
    initial: {
      x: 10,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  const second = {
    initial: {
      x: -7,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  }
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/madhukar-kumar-14PONRlqe6E-unsplash.jpg"
          alt="Unsplash Image by Madhukar Kumar"
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full"
        />
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/madhukar-kumar-mX16vPPHzXI-unsplash.jpg"
          alt="Unsplash Image by Madhukar Kumar"
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full"
        />
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/madhukar-kumar-rFIV8TohMyI-unsplash.jpg"
          alt="Random Image"
          width={300}
          height={300}
          className="rounded-lg object-cover w-full h-full"
        />
      </motion.div>
    </motion.div>
  )
}

export const SkeletonFive: React.FC = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  }
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/placeholder.svg?height=100&width=100"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          So you are a Jack of all trades?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Specializations are for insects. I am multi-variate.</p>
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  )
}

