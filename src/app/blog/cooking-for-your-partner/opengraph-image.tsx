import { generateBlogOG, ogSize, ogContentType } from "@/lib/og-blog";

export const alt = "Cooking for Your Partner: 10 Easy Meals That Look Fancy";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OGImage() {
  return generateBlogOG("Cooking for Your Partner: 10 Easy Meals That Look Fancy");
}
