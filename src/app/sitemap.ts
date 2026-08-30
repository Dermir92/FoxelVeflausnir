import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/skilmalar`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/personuvernd`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
