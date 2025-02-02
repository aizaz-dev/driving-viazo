import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Don't use CDN for previews
  preview: true,
  // Set to false if statically generating pages, using ISR or tag-based revalidation
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
