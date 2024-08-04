import React from "react";
import { client, urlFor } from "@/sanity/lib/client";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Feature/Feature";
import Drivers from "@/components/Drivers/Drivers";
import Passengers from "@/components/Passengers/Passengers";
import Footer from "@/components/Footer/Footer";
import { useNextSanityImage } from 'next-sanity-image';

const HomePage = async () => {
  const pageData = await client.fetch(
    `*[_type == "page" && slug.current == "home"][0]`
  );

  return (
    <div>
      <Header />
      {pageData.sections.map((section, index) => {
        switch (section._type) {
          case "hero":
            console.log(section);
            return (
              <Hero
                key={index}
                title={section.title}
                description={section.description}
                buttonText={section.buttonText}
                buttonLink={section.buttonLink}
                darkbg={urlFor(section.darkBackgroundImage).url()}
                darkAlt={section.darkBackgroundImage.alt}
                lightbg={urlFor(section.lightBackgroundImage).url()}
                lightAlt={section.lightBackgroundImage.alt}
              />
            );
          case "features":
            return (
              <Feature
                key={index}
                title={section.title}
                featuresList={section.featuresList}
              />
            );
          case "drivers":
            return <Drivers key={index} />;
          case "passengers":
            return <Passengers key={index} />;
          default:
            return null;
        }
      })}
      <Footer />
    </div>
  );
};

export default HomePage;
