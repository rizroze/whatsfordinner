import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "How to Eat Well When You're Going Through It";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("How to Eat Well When You're Going Through It");
}
