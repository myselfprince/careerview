export default function sitemap() {
  const baseUrl = 'https://www.careerview.com';

  // Define your static and collection routes here
  const routes = [
    '',
    '/collections/top-government-colleges',
    '/collections/top-bds-colleges',
    '/collections/uttar-pradesh',
    '/collections/mumbai',
    '/collections/mbbs-in-nepal',
  ];

  const sitemapRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8, // Give homepage highest priority
  }));

  return sitemapRoutes;
}