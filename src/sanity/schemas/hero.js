const hero = {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "buttonText", title: "Button Text", type: "string" },
    { name: "buttonLink", title: "Button Link", type: "url" },
    { name: "buttonText2", title: "Button Text 2", type: "string" },
    { name: "buttonLink2", title: "Button Link 2", type: "url" },
    {
      name: "image",
      title: "Hero Image",
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
