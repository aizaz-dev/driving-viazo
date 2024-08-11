"use client";
import React, { useState } from "react";

// const faqData = [
//   {
//     id: 1,
//     question: "Can I cancel at anytime?",
//     answer:
//       "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
//   },
//   {
//     id: 2,
//     question: "My team has credits. How do we use them?",
//     answer:
//       "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
//   },
//   {
//     id: 3,
//     question: "How does Preline's pricing work?",
//     answer:
//       "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
//   },
//   {
//     id: 4,
//     question: "How secure is Preline?",
//     answer:
//       "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
//   },
//   {
//     id: 5,
//     question: "How do I get access to a theme I purchased?",
//     answer:
//       "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.",
//   },
//   {
//     id: 6,
//     question: "Upgrade License Type",
//     answer:
//       "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
//   },
// ];

const Faq = ({ title, description, faqs }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleToggle = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="py-10">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className=" mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {title}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            {description}
          </p>
        </div>

        <div className=" mx-auto">
          <div className="hs-accordion-group">
            {faqs.map((faq) => (
              <div
                key={faq._key}
                className={`hs-accordion ${openItemId === faq._key ? "hs-accordion-active:bg-gray-100 bg-accent-500 dark:hs-accordion-active:bg-white/10" : ""} rounded-xl p-6`}
                id={`hs-basic-with-title-and-arrow-stretched-heading-${faq._key}`}
              >
                <button
                  className={`${openItemId === faq._key ? "text-white" : "text-gray-800"} hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start  rounded-lg transition  focus:outline-none  `}
                  aria-expanded={openItemId === faq._key}
                  aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${faq._key}`}
                  onClick={() => handleToggle(faq._key)}
                >
                  {faq.question}
                  <svg
                    className={`hs-accordion-active:hidden ${openItemId === faq._key ? "hidden text-white" : "block text-gray-600"} shrink-0 size-5  group-hover:text-gray-500 `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`hs-accordion-active:block ${openItemId === faq._key ? "block text-white" : "hidden text-gray-600"} shrink-0 size-5   `}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id={`hs-basic-with-title-and-arrow-stretched-collapse-${faq._key}`}
                  className={`hs-accordion-content ${openItemId === faq._key ? "max-h-[1000px]" : "max-h-0"} w-full overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                  role="region"
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${faq._key}`}
                >
                  <p
                    className={`${openItemId === faq._key ? "text-white" : "text-gray-800"}   `}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
