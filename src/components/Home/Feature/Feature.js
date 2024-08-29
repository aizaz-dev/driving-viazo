"use client";
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "@/sanity/lib/client";
const Feature = ({ title, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?._key || ""); // Initialize with the first tab's id

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="bg-accent">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl ">
                {title}
              </h2>

              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                {tabs.map((tab, index) => {
                  const iconImage = urlFor(tab.tabIcon).url();
                  const iconAlt = tab.tabIcon.alt;
                  return (
                    <button
                      key={tab._key}
                      type="button"
                      className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl  ${
                        activeTab === tab._key ? "active" : ""
                      }`}
                      id={`tabs-with-card-item-${index}`}
                      aria-selected={activeTab === tab._key}
                      onClick={() => handleTabClick(tab._key)}
                      role="tab"
                    >
                      <span className="flex gap-x-6">
                        <Image
                          width={30}
                          height={30}
                          alt={iconAlt}
                          src={iconImage}
                        />
                        <span className="grow">
                          <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800  ">
                            {tab.tabTitle}
                          </span>
                          <span className="block mt-1 text-gray-800 ">
                            {tab.tabDescription}
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                {tabs.map((tab) => {
                  const image = urlFor(tab.tabImage).url();
                  const ImageAlt = tab.tabImage.alt;
                  return (
                    <div
                      key={tab._key}
                      id={`tabs-with-card-${tab._key}`}
                      role="tabpanel"
                      aria-labelledby={`tabs-with-card-item-${tab._key}`}
                      className={activeTab === tab._key ? "" : "hidden"}
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl "
                        src={image}
                        alt={ImageAlt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

//
// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// const Feature = ({ title }) => {
//   const [activeTab, setActiveTab] = useState("tabs-with-card-1");

//   const handleTabClick = (tabId = "tabs-with-card-1") => {
//     setActiveTab(tabId);
//   };

//   return (
//     <div className="bg-accent">
//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         <div className="relative p-6 md:p-16">
//           <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
//             <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
//               <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl ">
//                 {title}
//               </h2>

//               <nav
//                 className="grid gap-4 mt-5 md:mt-10"
//                 aria-label="Tabs"
//                 role="tablist"
//                 aria-orientation="vertical"
//               >
//                 <button
//                   type="button"
//                   className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl  ${
//                     activeTab === "tabs-with-card-1" ? "active" : ""
//                   }`}
//                   id="tabs-with-card-item-1"
//                   aria-selected={activeTab === "tabs-with-card-1"}
//                   onClick={() => handleTabClick("tabs-with-card-1")}
//                   role="tab"
//                 >
//                   <span className="flex gap-x-6">
//                     <Image
//                       width={100}
//                       alt="ia"
//                       height={100}
//                       src="./image.svg"
//                     />
//                     <span className="grow">
//                       <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800  ">
//                         Advanced tools
//                       </span>
//                       <span className="block mt-1 text-gray-800 ">
//                         Use Preline thoroughly thought and automated libraries
//                         to manage your businesses.
//                       </span>
//                     </span>
//                   </span>
//                 </button>

//                 <button
//                   type="button"
//                   className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl  ${
//                     activeTab === "tabs-with-card-2" ? "active" : ""
//                   }`}
//                   id="tabs-with-card-item-2"
//                   aria-selected={activeTab === "tabs-with-card-2"}
//                   onClick={() => handleTabClick("tabs-with-card-2")}
//                   role="tab"
//                 >
//                   <span className="flex gap-x-6">
//                     <svg
//                       className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800  "
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="m12 14 4-4" />
//                       <path d="M3.34 19a10 10 0 1 1 17.32 0" />
//                     </svg>
//                     <span className="grow">
//                       <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800  ">
//                         Smart dashboards
//                       </span>
//                       <span className="block mt-1 text-gray-800 ">
//                         Quickly Preline sample components, copy-paste codes, and
//                         start right off.
//                       </span>
//                     </span>
//                   </span>
//                 </button>

//                 <button
//                   type="button"
//                   className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl  ${
//                     activeTab === "tabs-with-card-3" ? "active" : ""
//                   }`}
//                   id="tabs-with-card-item-3"
//                   aria-selected={activeTab === "tabs-with-card-3"}
//                   onClick={() => handleTabClick("tabs-with-card-3")}
//                   role="tab"
//                 >
//                   <span className="flex gap-x-6">
//                     <svg
//                       className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800  "
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
//                       <path d="M5 3v4" />
//                       <path d="M19 17v4" />
//                       <path d="M3 5h4" />
//                       <path d="M17 19h4" />
//                     </svg>
//                     <span className="grow">
//                       <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800  ">
//                         Powerful features
//                       </span>
//                       <span className="block mt-1 text-gray-800 ">
//                         Reduce time and effort on building modern look design
//                         with Preline only.
//                       </span>
//                     </span>
//                   </span>
//                 </button>
//               </nav>
//             </div>

//             <div className="lg:col-span-6">
//               <div className="relative">
//                 <div>
//                   <div
//                     id="tabs-with-card-1"
//                     role="tabpanel"
//                     aria-labelledby="tabs-with-card-item-1"
//                     className={activeTab === "tabs-with-card-1" ? "" : "hidden"}
//                   >
//                     <img
//                       className="shadow-xl shadow-gray-200 rounded-xl "
//                       src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
//                       alt="Features Image"
//                     />
//                   </div>

//                   <div
//                     id="tabs-with-card-2"
//                     role="tabpanel"
//                     aria-labelledby="tabs-with-card-item-2"
//                     className={activeTab === "tabs-with-card-2" ? "" : "hidden"}
//                   >
//                     <img
//                       className="shadow-xl shadow-gray-200 rounded-xl "
//                       src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
//                       alt="Features Image"
//                     />
//                   </div>

//                   <div
//                     id="tabs-with-card-3"
//                     role="tabpanel"
//                     aria-labelledby="tabs-with-card-item-3"
//                     className={activeTab === "tabs-with-card-3" ? "" : "hidden"}
//                   >
//                     <img
//                       className="shadow-xl shadow-gray-200 rounded-xl "
//                       src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80"
//                       alt="Features Image"
//                     />
//                   </div>
//                 </div>

//                 <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
//                   <svg
//                     className="w-16 h-auto text-orange-500"
//                     width="121"
//                     height="135"
//                     viewBox="0 0 121 135"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
//                       stroke="currentColor"
//                       strokeWidth="10"
//                       strokeLinecap="round"
//                     />
//                     <path
//                       d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
//                       stroke="currentColor"
//                       strokeWidth="10"
//                       strokeLinecap="round"
//                     />
//                     <path
//                       d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
//                       stroke="currentColor"
//                       strokeWidth="10"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="absolute inset-0 grid grid-cols-12 size-full">
//             <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full "></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feature;
// :: make this in array
