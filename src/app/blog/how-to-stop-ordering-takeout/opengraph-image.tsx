import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "How to Stop Ordering Takeout Every Night";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("How to Stop Ordering Takeout Every Night");
}
