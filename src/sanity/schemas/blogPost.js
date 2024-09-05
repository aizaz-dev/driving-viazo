// schemas/blogPost.js
const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(20).max(200),
    },
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
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "sponsored",
      title: "Sponsored",
      type: "boolean",
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
      initialValue: "Read more",
    },
    {
      name: "linkHref",
      title: "Link Href",
      type: "url",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                    { title: "Quote", value: "blockquote" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Strong", value: "strong" },
                      { title: "Emphasis", value: "em" },
                      { title: "Underline", value: "underline" },
                      { title: "Code", value: "code" },
                      {
                        title: "Big",
                        value: "big",
                        blockEditor: {
                          icon: () => "B",
                        },
                      },
                      {
                        title: "Small",
                        value: "small",
                        blockEditor: {
                          icon: () => "S",
                        },
                      },
                    ],
                    annotations: [
                      {
                        name: "color",
                        title: "Color",
                        type: "object",
                        fields: [
                          {
                            name: "color",
                            title: "Color",
                            type: "string",
                            options: {
                              list: [
                                { title: "Red", value: "red" },
                                { title: "Green", value: "green" },
                                { title: "Blue", value: "blue" },
                                
                              ],
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default blogPost;
