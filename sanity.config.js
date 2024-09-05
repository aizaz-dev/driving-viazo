import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId: "0ze95d8m",
  dataset: "production",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
