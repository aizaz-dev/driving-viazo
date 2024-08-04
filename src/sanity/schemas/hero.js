const hero = {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "buttonText", title: "Button Text", type: "string" },
    { name: "buttonLink", title: "Button Link", type: "url" },
    {
      name: "lightBackgroundImage",
      title: "Light Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "darkBackgroundImage",
      title: "Dark Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
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

export default hero;
