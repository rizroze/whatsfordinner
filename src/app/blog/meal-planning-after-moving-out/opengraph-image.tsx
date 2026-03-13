import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Meal Planning After Moving Out: The Guide Nobody Gave You";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Meal Planning After Moving Out: The Guide Nobody Gave You");
}
