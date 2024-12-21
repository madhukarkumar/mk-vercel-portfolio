"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Linkedin, FileText } from 'lucide-react'
import { SiMedium } from 'react-icons/si'
import { ThemeProvider } from '@/components/theme-provider'
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconBoxAlignRightFilled } from '@tabler/icons-react'

import { Card } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { SkeletonOne, SkeletonTwo, SkeletonThree, SkeletonFour, SkeletonFive } from '@/components/bento-skeletons'
import GridPattern from '@/components/magicui/grid-pattern'

export default function Page() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <div className="container mx-auto p-4 md:p-8 max-w-7xl">
          {/* Theme Toggle */}
          <div className="fixed right-4 top-4 z-50">
            <ThemeToggle />
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Profile Section */}
            <div className="md:w-1/3 mb-8 md:mb-0 border rounded-lg p-3 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-center md:text-left">
                  <Image
                    src="/mk-casual.jpeg"
                    alt="Profile picture of Madhukar Kumar"
                    width={200}
                    height={200}
                    className="mx-auto md:mx-0 rounded-full aspect-square object-cover"
                  />
                  <h1 className="mt-4 text-4xl font-bold text-gray-800 dark:text-gray-100">Madhukar Kumar</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">Dev turned Marketer</p>
                </div>
                {/* Current Role & Bio */}
                <div className="mt-6 space-y-4">
                  <p className="text-lg text-gray-800 dark:text-gray-200">Currently: CMO @SingleStore</p>
                  <p className="text-lg text-gray-800 dark:text-gray-200">Previously: Redis, Nutanix, Oracle</p>
                  <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                    <p>
                      I began my career as a journalist before pursuing a Master’s in Software Engineering and Mass Communications, which set me on the path to becoming a software engineer. A few years later, I transitioned into product management and eventually found my passion as a marketer, working with both small startups and large tech companies in Silicon Valley.
                    </p>
                    <p>
                      I thrive at the intersection of technology and creativity, building solutions and writing content that empower startup founders, growth marketers, and anyone eager to combine product management, product marketing, and engineering to create meaningful impact.
                    </p>
                    <p>You can find me on Twitter and LinkedIn.</p>
                  </div>
                </div>
              </div>
              <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray="4 2"
                className="absolute inset-0 h-full w-full text-gray-300 dark:text-gray-700 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              />
            </div>

            {/* Bento Grid Layout */}
            <div className="md:w-2/3">
              <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                  />
                ))}
              </BentoGrid>

              {/* Current Obsessions */}
              <div className="mt-8">
                <Card className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-4">Current Obsessions</h2>
                    <ul className="list-disc list-inside mb-2">
                      <li className="text-lg">Building an AI Agent for marketers - 
                        Chat with my self-learning AI twin and ask questions about marketing, PLG, tech stack. Cringe-worthy now. Guaranteed to improve in the neear future.
                      </li>
                      <li className="text-lg">
                        Working on an open source project to make databases more accessible to the army of agents built mindlessly by humans.
                      </li>
                    </ul>
                    <div className="flex gap-4">
                      <Link href="https://linkedin.com/in/madhukar" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        <Linkedin className="w-6 h-6" />
                      </Link>
                      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        <Twitter className="w-6 h-6" />
                      </Link>
                      <Link href="https://madhukarkumar.medium.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        <SiMedium className="w-6 h-6" />
                      </Link>
                      <Link href="https://madhukarkumar.substack.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                        <FileText className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        {/* ElevenLabs Convai Widget */}
        <div className="fixed bottom-4 right-4 z-50">
          <elevenlabs-convai agent-id="PvkfXfm0WWGPRXdYCPuN"></elevenlabs-convai>
        </div>
      </div>
    </ThemeProvider>
  )
}
const items = [
  {
    title: "I write in prose",
    description: (
      <span className="text-sm">
        About twice a month on Medium and Substack. And every other day on LinkedIn.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1 border border-neutral-200 dark:border-neutral-700",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "I write in code",
    description: (
      <span className="text-sm">
        I build apps for fun. Here, I do use AI. I am on github/madhukarkumar
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1 border border-neutral-200 dark:border-neutral-700",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "I have a podcast",
    description: (
      <span className="text-sm">
        How we made that app - Interview of engineers on how they build apps. It is also on YouTube.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1 border border-neutral-200 dark:border-neutral-700",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "I create pictures",
    description: (
      <span className="text-sm">
        Sometimes I create pictures. With cameras. Not AI. They end up on Unsplash.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-3 lg:col-span-2 border border-neutral-200 dark:border-neutral-700",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Things I don't do",
    description: (
      <span className="text-sm">
        Sports. 
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-3 lg:col-span-1 border border-neutral-200 dark:border-neutral-700",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
]

