import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1pycna5g",
  dataset: "production",
  apiVersion: "2023-05-26",
  useCdn: true,
  token: process.env.REACT_APP_PUBLIC_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
