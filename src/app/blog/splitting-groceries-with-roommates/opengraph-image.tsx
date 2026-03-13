import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Splitting Groceries with Roommates: 3 Systems That Work";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Splitting Groceries with Roommates: 3 Systems That Work");
}
