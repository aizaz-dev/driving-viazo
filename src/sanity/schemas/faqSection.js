const faqSection = {
  name: "faqSection",
  title: "FAQ Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Section Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Section Description",
      type: "text",
      description: "A brief description or introduction to the FAQ section.",
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    },
  ],
};

export default faqSection;
