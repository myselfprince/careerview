export default function robots() {
  const baseUrl = 'https://www.careerview.com'; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Add any paths you don't want Google to index
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}