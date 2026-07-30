import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: String(process.env.DOMAIN),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    }
  ];
}