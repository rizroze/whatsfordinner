import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Cheap Meals for One: 15 Dinners Under $3";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Cheap Meals for One: 15 Dinners Under $3");
}
