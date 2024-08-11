import Faq from "@/components/Drivers/Faq/Faq";
import Features from "@/components/Drivers/Features/Features";
import Hero from "@/components/Drivers/Hero/Hero";
import Pricing from "@/components/Drivers/Pricing/Pricing";
import { client, urlFor } from "@/sanity/lib/client";

import React from "react";

const page = async () => {
  const pageData = await client.fetch(
    `*[_type == "page" && slug.current == "drivers"][0]`
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
          case "pricingSection":
            return (
              <Pricing
                key={index}
                title={section.title}
                description={section.description}
                pricingPlans={section.plans}
              />
            );
          case "features":
            return (
              <Features key={index} title={section.title} tabs={section.tabs} />
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

export default page;
