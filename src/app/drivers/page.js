import Faq from "@/components/Drivers/Faq/Faq";
import Features from "@/components/Drivers/Features/Features";
import Hero from "@/components/Drivers/Hero/Hero";
import Pricing from "@/components/Drivers/Pricing/Pricing";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <Features />
      <Faq />
    </div>
  );
};

export default page;
