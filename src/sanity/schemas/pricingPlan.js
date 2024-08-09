const pricingPlan = {
    name: "pricingPlan",
    title: "Pricing Plan",
    type: "object",
    fields: [
      { name: "title", title: "Title", type: "string" },
      { name: "price", title: "Price", type: "string" },
      { name: "description", title: "Description", type: "text" },
      {
        name: "features",
        title: "Features",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "popular",
        title: "Popular",
        type: "boolean",
        description: "Mark this plan as the most popular option.",
      },
    ],
  };
  
  export default pricingPlan;
  