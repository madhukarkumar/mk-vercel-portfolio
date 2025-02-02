# Changelog

## [2024-02-01]

### Added
- Added ten new articles to `data/blogs.ts`:
  - "The Rise of New Wealth Creators in the Age of AI"
  - "A Developer's Roadmap to Getting Started with AI in 2025"
  - "A Beginner's Roadmap to Learning AI in 2025"
  - "The Art and Science of Effective Storytelling"
  - "How to Build a Rich RAG App on MongoDB-Compatible JSON"
  - "The 7-Factor Enterprise AI App"
  - "The Opposite of a Good Idea: Do Billboards Still Matter in the Digital Age?"
  - "The Polarity Shift: What Does Google's SGE and AI Overviews Announcement Mean for Business Websites"
  - "The Parrotfish Principle: How to Craft Compelling Product Messaging"
  - "The Elephant Test: A Tale of Product Trust and Marketing Genius"

### Updated
- Updated `data/blogs.ts` with actual Medium articles:
  - "Database Trends of 2024: What You Missed and Why It Matters"
  - "How to Build a Multi-Agent RAG System (MARS) with OpenAI Swarm"
  - "How to Build Enterprise AI Apps with Multi-Agent RAG Systems (MARS)"
  - "The Next Generation of Gen AI Apps and How to Build One"
- Fixed featured image URLs for all articles to use correct Medium image URLs
- Modified `BlogsGrid` component to use BentoGrid layout matching the blogs page design
- Updated blogs page to use data from `blogs.ts` instead of hardcoded data
- Limited home page to show only the three most recent articles in BlogsGrid

### Files Changed
- `mk-vercel-portfolio/data/blogs.ts`
- `mk-vercel-portfolio/components/ui/blogs-grid.tsx`
- `mk-vercel-portfolio/app/blogs/page.tsx` 