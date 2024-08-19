const page = {
  name: "page",
  title: "Page",
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
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "hero" },
        { type: "features" },
        { type: "drivers" },
        { type: "driversHero" },
        { type: "pricingSection" },
        { type: "faqSection" },
        { type: "blogSection" },
        {type:"footer"}
      ],
    },
  ],
};

export default page;
