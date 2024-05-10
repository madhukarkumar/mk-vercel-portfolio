import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madhukar Kumar",
  description: "Portfolio, articles and podcasts by Madhukar Kumar",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
          <html lang="en" data-theme="dim">
          <head>
            <meta property="og:title" content="Madhukar Kumar"/>
            <meta property="og:description" content="Portfolio, articles and podcasts by Madhukar Kumar"/>
            <meta property="og:image" content="/images/portfolio-preview.jpeg"/>
            <meta property="og:url" content="https://your-website-url.com"/>
            <meta property="og:type" content="website"/>
          </head>
          <body className={inter.className}>{children}</body>
          </html>
      </ClerkProvider>
  );
}
