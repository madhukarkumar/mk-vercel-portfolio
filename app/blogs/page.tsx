"use client";

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SiMedium, SiSubstack, SiLinkedin } from 'react-icons/si';
import { ArrowLeft } from 'lucide-react';

type BlogPost = {
  title: string;
  description: string;
  imageUrl?: string;
  link: string;
  platform: 'linkedin' | 'medium' | 'substack';
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    title: 'The Art of Technical Marketing',
    description: 'How to bridge the gap between engineering and marketing in tech companies',
    imageUrl: '/substack-image.png',
    link: 'https://madhukarkumar.substack.com',
    platform: 'substack',
    date: '2024-01-15'
  },
  {
    title: 'Product-Led Growth Strategies',
    description: 'Implementing PLG in enterprise software companies',
    imageUrl: '/podcast.png',
    link: 'https://linkedin.com/in/madhukar',
    platform: 'linkedin',
    date: '2024-01-10'
  },
  {
    title: 'Database Evolution',
    description: 'The future of databases in the age of AI',
    imageUrl: '/madhukar-kumar-14PONRlqe6E-unsplash.jpg',
    link: 'https://madhukarkumar.medium.com',
    platform: 'medium',
    date: '2024-01-05'
  },
];

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'medium':
      return <SiMedium className="h-4 w-4" />;
    case 'substack':
      return <SiSubstack className="h-4 w-4" />;
    case 'linkedin':
      return <SiLinkedin className="h-4 w-4" />;
    default:
      return null;
  }
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors py-8">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center mb-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Articles & Posts</h1>
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BentoGridItem
                title={post.title}
                description={
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{post.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      {getPlatformIcon(post.platform)}
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                }
                header={
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    {post.imageUrl && (
                      <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover/bento:scale-105"
                      />
                    )}
                  </div>
                }
                className="cursor-pointer"
                icon={getPlatformIcon(post.platform)}
                onClick={() => window.open(post.link, '_blank')}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}