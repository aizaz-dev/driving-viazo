import React from "react";
import { client, urlFor } from "@/sanity/lib/client";
import Hero from "@/components/Home/Hero/Hero";
import Feature from "@/components/Home/Feature/Feature";
import Drivers from "@/components/Home/Drivers/Drivers";
import Passengers from "@/components/Home/Passengers/Passengers";

const HomePage = async () => {
  const pageData = await client.fetch(
    `*[_type == "page" && slug.current == "home"][0]`
  );

  return (
    <div>
      {pageData.sections.map((section, index) => {
        console.log("pages :", pageData);
        switch (section._type) {
          case "hero":
            return (
              <Hero
                key={index}
                title={section.title}
                description={section.description}
                buttonText={section.buttonText}
                buttonLink={section.buttonLink}
                buttonText2={section.buttonText2}
                buttonLink2={section.buttonLink2}
                image={urlFor(section.image).url()}
                imageAlt={section.image.alt}
               
              />
            );

          case "features":
            return (
              <Feature key={index} title={section.title} tabs={section.tabs} />
            );
          case "drivers":
            return (
              <Drivers
                key={index}
                title={section.title}
                driverFeatures={section.driverFeatures}
                description={section.description}
                image={urlFor(section.image).url()}
                imageAlt={section.image.alt}
              />
            );
          case "drivers":
            console.log("Passengers", section);
            return (
              <Passengers
                key={index}
                title={section.title}
                driverFeatures={section.driverFeatures}
                description={section.description}
                image={urlFor(section.image).url()}
                imageAlt={section.image.alt}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default HomePage;
