'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  // Add more blog posts here
];

export function BlogsGrid() {
  return (
    <div className="w-full py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Latest Articles & Posts</h2>
        <Link href="/blogs" className="text-blue-600 dark:text-blue-400 hover:underline">View All</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href={post.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-full min-h-[200px] bg-gray-100 dark:bg-gray-800">
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="mb-2 text-sm uppercase tracking-wider">
                      {post.platform} • {new Date(post.date).toLocaleDateString()}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-200">{post.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}