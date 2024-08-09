const pricingSection = {
    name: "pricingSection",
    title: "Pricing Section",
    type: "object",
    fields: [
      { name: "title", title: "Section Title", type: "string" },
      {
        name: "description",
        title: "Section Description",
        type: "text",
        description: "A brief description or introduction to the pricing section.",
      },
      {
        name: "plans",
        title: "Pricing Plans",
        type: "array",
        of: [{ type: "pricingPlan" }],
      },
    ],
  };
  
  export default pricingSection;
  