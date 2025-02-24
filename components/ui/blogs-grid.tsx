'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogs';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { SiMedium } from 'react-icons/si';

export function BlogsGrid() {
  const getPlatformIcon = () => {
    return <SiMedium className="h-4 w-4" />;
  };

  // Only show first three articles on home page
  const displayedPosts = blogPosts.slice(0, 3);

  return (
    <div className="w-full py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Latest Articles & Posts</h2>
        <Link href="/blogs" className="text-blue-600 dark:text-blue-400 hover:underline">View All</Link>
      </div>
      <BentoGrid className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedPosts.map((post, index) => (
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
                    {getPlatformIcon()}
                    <span>{new Date(post.published_date).toLocaleDateString()}</span>
                  </div>
                </div>
              }
              header={
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  {post.featured_image_url && (
                    <Image
                      src={post.featured_image_url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/bento:scale-105"
                    />
                  )}
                </div>
              }
              className="cursor-pointer"
              icon={getPlatformIcon()}
              onClick={() => window.open(post.url, '_blank')}
            />
          </motion.div>
        ))}
      </BentoGrid>
    </div>
  );
}