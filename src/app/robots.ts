import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/dashboard", "/plan/", "/checkout", "/preview", "/callback"],
    },
    sitemap: "https://whatsfordinner.fit/sitemap.xml",
  };
}
