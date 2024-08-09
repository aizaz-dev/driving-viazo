import { urlFor } from "@/sanity/lib/client";
import React from "react";

const Hero = ({ title, description, trustedBy, heroImage, heroAlt }) => {
  return (
    <div className="py-[40px] min-h-[calc(100vh-100px)] flex items-center">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              {title}
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              {description}
            </p>

            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium text-gray-800 uppercase dark:text-neutral-200">
                Trusted by:
              </span>

              <div className="mt-4 flex gap-x-8">
                {trustedBy.map((obj, index) => {
                  const image = urlFor(obj).url();
                  const imageAlt = obj.alt;

                  return (
                    <img
                      key={index}
                      className="h-8"
                      src={image}
                      alt={imageAlt}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img className="w-full rounded-xl" src={heroImage} alt={heroAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
