import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

const Features = ({ title, heroImage, description, tabs }) => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="">
          <Image
            className="w-full aspect-[2.4/1.2] object-cover rounded-xl"
            src={heroImage}
            alt={title}
            width={987}
            height={411}
          />
        </div>

        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
              {title}
            </h2>
            <p className="mt-2 md:mt-4 text-gray-500">{description}</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {tabs.map((feature, index) => {
                const image = urlFor(feature.image).url();
                return (
                  <div key={index} className="flex gap-x-5">
                    <Image
                      width={40}
                      height={40}
                      className="shrink-0 w-[40px]"
                      src={image}
                      alt=""
                    />
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
