import Faq from "@/components/Drivers/Faq/Faq";
import Hero from "@/components/Drivers/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import { client } from "@/sanity/lib/client";
import React from "react";

const app = async () => {
  const pageData = await client.fetch(
    `*[_type == "page" && slug.current == "riders"][0]`
  );
  return (
    <div>
      <Hero />
      {pageData.sections.map((section, index) => {
        switch (section._type) {
          case "features":
            return (
              <Feature key={index} title={section.title} tabs={section.tabs} />
            );
          default:
            return null;
        }
      })}
      <Faq/>
    </div>
  );
};

export default app;
