"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/sanity/lib/client";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "footer"]{
          logo,
          footerSections,
          socialLinks,
          subscribeText,
          subscribePlaceholder,
          subscribeButtonText,
          subscribeDescription,
          copyrightText
        }[0]`
      )
      .then((data) => setFooterData(data))
      .catch(console.error);
  }, []);

  if (!footerData) return null;

  return (
    <div>
      <footer className="mt-auto bg-gray-900 w-full ">
        <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <Link
                className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
                <Image
                  src={urlFor(footerData.logo.asset).url()}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {footerData.footerSections.map((section, index) => (
              <div key={index} className="col-span-1">
                <h4 className="font-semibold text-gray-100">{section.title}</h4>

                <div className="mt-3 grid space-y-3">
                  {section.links.map((link, index) => (
                    <p key={index}>
                      <Link
                        className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                        href={link.href}
                      >
                        {link.name}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="col-span-2">
              <h4 className="font-semibold text-gray-100">
                {footerData.subscribeText}
              </h4>

              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 ">
                  <div className="w-full">
                    <label className="sr-only">Subscribe</label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder={footerData.subscribePlaceholder}
                    />
                  </div>
                  <Link
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    {footerData.subscribeButtonText}
                  </Link>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  {footerData.subscribeDescription}
                </p>
              </form>
            </div>
          </div>

          <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400 ">
                {footerData.copyrightText}
              </p>
            </div>

            <div>
              {footerData.socialLinks.map((link, index) => (
                <Link
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  href={link.href}
                  key={index}
                >
                  <Image
                    src={urlFor(link.icon.asset).url()}
                    alt={`Social Icon ${index}`}
                    width={16}
                    height={16}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
