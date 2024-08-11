import Faq from "@/components/Drivers/Faq/Faq";
import Hero from "@/components/Drivers/Hero/Hero";

import Feature from "@/components/Home/Feature/Feature";

import { client, urlFor } from "@/sanity/lib/client";
import React from "react";

const app = async () => {
  const pageData = await client.fetch(
    `*[_type == "page" && slug.current == "riders"][0]`
  );
  return (
    <div>
      {pageData.sections.map((section, index) => {
        switch (section._type) {
          case "driversHero":
            return (
              <Hero
                key={index}
                title={section.title}
                description={section.description}
                trustedBy={section.trustedBy}
                heroImage={urlFor(section.heroImage).url()}
                heroAlt={section.heroImage.alt}
              />
            );
          case "features":
            return (
              <Feature key={index} title={section.title} tabs={section.tabs} />
            );
          case "faqSection":
            return (
              <Faq
                key={index}
                title={section.title}
                description={section.description}
                faqs={section.faqs}
              />
            );
          default:
            return null;
        }
      })}
      
    </div>
  );
};

export default app;
