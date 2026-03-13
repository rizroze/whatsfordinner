import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "7 Best Meal Delivery Alternatives in 2026";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("7 Best Meal Delivery Alternatives in 2026");
}
