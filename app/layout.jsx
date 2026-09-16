import "./globals.css";
import { Navigation } from "./Navigation";
import Head from 'next/head';

export const metadata = {
  title: "Jonny Steven | Senior AI Full Stack Engineer Portfolio",
  description: "Jonny Steven is a Senior AI Full Stack Engineer with 8+ years of experience building scalable web platforms, LLM-powered applications, and cloud-native systems with React, Next.js, Node.js, Python, and PostgreSQL.",
  keywords: ["Jonny Steven", "Senior AI Full Stack Engineer", "AI Engineer", "Full Stack Developer", "React", "Next.js", "Node.js", "NestJS", "Python", "LangChain", "LLM", "RAG", "PostgreSQL", "Redis", "Apache Kafka", "TypeScript", "Kubernetes", "AWS", "Docker", "CI/CD"],
  image: "/images/logo-background.png",
  metadataBase: new URL("https://zhan-portfolio-v2.vercel.app/"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jonny Steven | Senior AI Full Stack Engineer Portfolio",
    description: "Senior AI Full Stack Engineer specializing in LLM integration, scalable backends, and modern React/Next.js frontends.",
    url: 'https://zhan-portfolio-v2.vercel.app/',
    siteName: 'Jonny Steven Portfolio',
    
    images: [
      {
        url: '/images/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Jonny Steven - Senior AI Full Stack Engineer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jonny Steven | Senior AI Full Stack Engineer Portfolio',
    description: 'Senior AI Full Stack Engineer building production LLM systems, real-time platforms, and cloud-native applications.',
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
              "name": "Jonny Steven",
              "jobTitle": "Senior AI Full Stack Engineer",
              "email": "jonny.steven.js@gmail.com",
              "url": "https://zhan-portfolio-v2.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/jonny-steven-835023b7",
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "LangChain",
                "LLM Integration",
                "PostgreSQL",
                "Kubernetes",
                "AWS"
              ],
              "description": "Senior AI Full Stack Engineer with 8+ years building AI-powered applications and scalable cloud-native platforms.",
              "image": "https://zhan-portfolio-v2.vercel.app/images/logo-background.png"
            })
          }}
        />
        <meta property="og:site_name" content="Jonny Steven Portfolio" />
        <meta name="application-name" content="Jonny Steven Portfolio" />
      </Head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
