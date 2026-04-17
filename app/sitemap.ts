import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://saferole.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://saferole.in/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://saferole.in/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
