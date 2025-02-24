"use client";

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SiMedium } from 'react-icons/si';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogs';

type BlogPost = {
  title: string;
  description: string;
  featured_image_url: string;
  url: string;
  published_date: string;
};

const getPlatformIcon = () => {
  return <SiMedium className="h-4 w-4" />;
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
        <BentoGrid className="max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <BentoGridItem
                title={post.title}
                description={
                  <div className="flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:line-clamp-none line-clamp-3">{post.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      {getPlatformIcon()}
                      <span>{new Date(post.published_date).toLocaleDateString()}</span>
                    </div>
                  </div>
                }
                header={
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    {post.featured_image_url && (
                      <Image
                        src={post.featured_image_url}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                }
                className="cursor-pointer border-none hover:absolute hover:z-10 hover:w-full hover:bg-white dark:hover:bg-gray-800"
                icon={getPlatformIcon()}
                onClick={() => window.open(post.url, '_blank')}
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}