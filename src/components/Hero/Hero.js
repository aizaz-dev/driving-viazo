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
        className={`relative min-h-[90vh] overflow-hidden before:absolute before:top-0 before:start-1/2  dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2`}
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
              className="inline-flex justify-center items-center gap-x-3 text-center bg-main-700 text-white text-sm font-medium rounded-full py-3 px-4"
              href={buttonLink}
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
