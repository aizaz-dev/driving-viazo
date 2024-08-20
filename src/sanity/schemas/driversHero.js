const driversHero = {
  name: "driversHero",
  title: "DriversHero",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "trustedBy",
      title: "Trusted By",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
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
            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "heroImage",
      title: "Hero Image",
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
};

export default driversHero;
