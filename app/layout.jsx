import "./globals.css";
import { Navigation } from "./Navigation";
import Head from 'next/head';

export const metadata = {
  title: "Zhan Xiu Wei | Senior Frontend Developer Portfolio",
  description: "Zhan Xiu Wei is a Senior Frontend Developer specializing in Next.js, React, and modern web technologies. View my portfolio of web development projects and professional experience.",
  keywords: ["Zhan Xiu Wei", "Senior Frontend Developer", "Next.js", "Nuxt.js", "Vue.js", "React", "Angular", "Shopify", "Python", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Git", "GitHub", "Docker", "AWS", "CI/CD", "Agile", "Scrum"],
  image: "/images/logo-background.png",
  metadataBase: new URL("https://zhan-portfolio-v2.vercel.app/"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Zhan Xiu Wei | Senior Frontend Developer Portfolio",
    description: "Zhan Xiu Wei is a Senior Frontend Developer specializing in Next.js, React, and modern web technologies. View my portfolio of web development projects and professional experience.",
    url: 'https://zhan-portfolio-v2.vercel.app/',
    siteName: 'Zhan Xiu Wei Portfolio',
    
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Zhan Xiu Wei - Senior Frontend Developer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zhan Xiu Wei | Senior Frontend Developer Portfolio',
    description: 'Zhan Xiu Wei is a Senior Frontend Developer specializing in Next.js, React, and modern web technologies.',
    images: ['/images/logo-background.png'],
  },
  verification: {
    google: 'PiNSBxA9TXXm_qjYRL1Wnw3fcdOZ-JgohHDhVznh-Vs',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="PiNSBxA9TXXm_qjYRL1Wnw3fcdOZ-JgohHDhVznh-Vs" />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Zhan Xiu Wei",
              "jobTitle": "Senior Frontend Developer",
              "url": "https://zhan-portfolio-v2.vercel.app/",
              "sameAs": [
                "https://github.com/g-r-te",
              ],
              "knowsAbout": [
                "Next.js",
                "React",
                "Vue.js",
                "TypeScript",
                "JavaScript",
                "Frontend Development"
              ],
              "description": "Senior Frontend Developer specializing in modern web technologies",
              "image": "https://zhan-portfolio-v2.vercel.app//images/logo-background.png"
            })
          }}
        />
        <meta property="og:site_name" content="Zhan Xiu Wei Portfolio" />
        <meta name="application-name" content="Zhan Xiu Wei Portfolio" />
      </Head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}