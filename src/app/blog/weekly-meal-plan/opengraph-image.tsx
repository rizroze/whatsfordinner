import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Weekly Meal Plan: How to Plan Your Entire Week in 10 Minutes";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Weekly Meal Plan: How to Plan Your Entire Week in 10 Minutes");
}
