import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
const Hero = async ({
  title,
  description,
  buttonText,
  buttonLink,
  darkbg,
  darkAlt,
  lightbg,
  lightAlt,
}) => {
  return (
    <div>
      <div
        className={`relative min-h-[80vh] overflow-hidden before:absolute before:top-0 before:start-1/2  dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2`}
      >
        <Image
          className=" absolute z-0 block dark:hidden  top-0 right-0 w-full h-full left-0 bottom-0"
          src={lightbg}
          alt={lightAlt}
          width={30}
          height={30}
        />
        <Image
          className=" absolute z-0 hidden dark:block top-0 right-0 w-full h-full left-0 bottom-0"
          src={darkbg}
          alt={darkAlt}
          width={30}
          height={30}
        />
        <div className="max-w-[85rem] relative z-10 mx-auto md:mt-28 px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center"></div>

          <div className="mt-5 max-w-xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              {title}
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              {description}
            </p>
          </div>

          <div className="mt-8 gap-3  flex justify-center">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-main-600 text-white text-sm font-medium rounded-xl py-3 px-4"
              href={buttonLink}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
