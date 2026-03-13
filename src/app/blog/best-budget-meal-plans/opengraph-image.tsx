import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "5 Best Budget Meal Plans in 2026";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("5 Best Budget Meal Plans in 2026");
}
