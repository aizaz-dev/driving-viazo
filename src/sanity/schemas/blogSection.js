// schemas/blogSection.js
const blogSection = {
  name: "blogSection",
  title: "Blog Section",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "string" },
    {
      name: "blogs",
      title: "Blogs",
      type: "array",
      of: [{ type: "reference", to: { type: "blogPost" } }],
    },
  ],
};

export default blogSection;
