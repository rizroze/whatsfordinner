import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Best Factor Alternative 2026";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Best Factor Alternative 2026");
}
