import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "ADHD Meal Planning: A System That Actually Works";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("ADHD Meal Planning: A System That Actually Works");
}
