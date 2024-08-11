const faqItem = {
  name: "faqItem",
  title: "FAQ Item",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default faqItem;
