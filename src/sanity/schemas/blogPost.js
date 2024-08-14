// schemas/blogPost.js
const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    { name: "description", title: "Description", type: "text" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    { name: "sponsored", title: "Sponsored", type: "boolean" },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
      initialValue: "Read more",
    },
    { name: "linkHref", title: "Link Href", type: "url" },
  ],
};

export default blogPost;
