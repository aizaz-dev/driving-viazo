const feature = {
  name: "features",
  title: "Features",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    {
      name: "tabs",
      title: "Tabs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "tabTitle", title: "Tab Title", type: "string" },
            { name: "tabDescription", title: "Tab Description", type: "text" },
            {
              name: "tabIcon",
              title: "Tab Icon",
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
            {
              name: "tabImage",
              title: "Tab Image",
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
          ],
        },
      ],
    },
  ],
};

export default feature;
