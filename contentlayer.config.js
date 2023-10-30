import { makeSource, defineDocumentType } from "@contentlayer/source-files";

const Itinerary = defineDocumentType(() => ({
  name: "Itinerary",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
      required: true,
    },
    count: {
      type: "number",
      default: 0,
    },
    author: {
      type: "string",
      required: true,
    },
    image: { type: "image" },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/itineraries/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  /* options */
  contentDirPath: "content",
  documentTypes: [Blog],
});
