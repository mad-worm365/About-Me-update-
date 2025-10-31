export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/private/*'],
      },
      sitemap: 'https://zhan-portfolio-v2.vercel.app/sitemap.xml',
    }
  }