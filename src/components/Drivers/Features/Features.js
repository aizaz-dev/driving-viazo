"use client";
import { urlFor } from "@/sanity/lib/client";
import React, { useState } from "react";

const Features = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]._key);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="py-10">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <nav
          className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-y-px sm:gap-y-0 sm:gap-x-4"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {tabs.map((tab) => {
            const image = urlFor(tab.tabIcon).url();
            const heroAlt = tab.tabIcon.alt;
            return (
              <button
                key={tab._key}
                type="button"
                className={`hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent w-full flex flex-col text-start hover:bg-gray-100 focus:outline-none focus:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-800 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 ${
                  activeTab === tab._key ? "active" : ""
                }`}
                id={`tabs-with-card-item-${tab._key}`}
                aria-selected={activeTab === tab._key}
                onClick={() => handleTabClick(tab._key)}
                aria-controls={tab._key}
                role="tab"
              >
                {/* {tab.icon} */}
                <img src={image} alt={heroAlt} className="size-16" />
                <span className="mt-5">
                  <span className="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">
                    {tab.tabTitle}
                  </span>
                  <span className="hidden lg:block mt-2 text-gray-800 dark:text-neutral-200">
                    {tab.tabDescription}
                  </span>
                </span>
              </button>
            );
          })}
        </nav>

        <div className="mt-12 md:mt-16">
          {tabs.map((tab) => {
            const image = urlFor(tab.tabImage).url();
            const heroAlt = tab.tabImage.alt;
            return (
              <div
                key={tab._key}
                id={tab._key}
                role="tabpanel"
                aria-labelledby={`tabs-with-card-item-${tab._key}`}
                className={activeTab === tab._key ? "" : "hidden"}
              >
                <div className="max-w-[1140px] lg:pb-32 relative">
                 

                  <figure className="ms-auto me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                    <div className="relative flex items-center max-w-[50rem] bg-white border border-gray-200 dark:border-neutral-700 dark:bg-neutral-800">
                      <div className="w-full">
                        <img
                          className="rounded-t-lg"
                          src={image}
                          alt={heroAlt}
                        />
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
