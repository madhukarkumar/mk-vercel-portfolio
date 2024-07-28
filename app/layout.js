import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Madhukar Kumar",
  description: "Portfolio, articles and podcasts by Madhukar Kumar",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta property="og:title" content="Madhukar Kumar"/>
          <meta property="og:description" content="Portfolio, articles and podcasts by Madhukar Kumar"/>
          <meta property="og:image" content="/images/portfolio-preview.jpeg"/>
          <meta property="og:url" content="https://your-website-url.com"/>
          <meta property="og:type" content="website"/>
        </head>
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}