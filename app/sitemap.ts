import { MetadataRoute } from "next";

const siteUrl = "https://medkey.tech";

const routes = ["", "#how-it-works", "#features", "#security", "#faq", "#cta"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}/${route.replace("#", "")}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

