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
                          render: (props) => (
                            <span style={{ fontSize: "1.5em" }}>
                              {props.children}
                            </span>
                          ),
                        },
                      },
                      {
                        title: "Small",
                        value: "small",
                        blockEditor: {
                          icon: () => "S",
                          render: (props) => (
                            <span style={{ fontSize: "0.75em" }}>
                              {props.children}
                            </span>
                          ),
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
