const drivers = {
  name: "drivers",
  title: "Drivers",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "string" }, // Changed to string
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
      name: "driverFeatures",
      title: "Drivers Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "featureName", title: "Feature Name", type: "string" },
          ],
        },
      ],
    },
  ],
};

export default drivers;
