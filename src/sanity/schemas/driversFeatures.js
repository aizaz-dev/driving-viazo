const driversFeatures = {
  name: "driversFeatures",
  title: "Drivers Features",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The main title for the features section.",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "A brief description of what this section covers.",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      description: "The main image displayed in the features section.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featuresList",
      type: "array",
      title: "Features List",
      description: "List of individual features displayed in this section.",
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
              name: "title",
              type: "string",
              title: "Title",
              description: "Title of the feature.",
            },
            {
              name: "description",
              type: "text",
              title: "Description",
              description: "Description of the feature.",
            },
          ],
        },
      ],
    },
  ],
};

export default driversFeatures;
