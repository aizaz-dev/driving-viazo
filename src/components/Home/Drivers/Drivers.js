import React from "react";

const Drivers = ({ title, driverFeatures, description, image, imageAlt }) => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
                  {title}
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">
                  {description}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-4">
                {driverFeatures?.map((feature, index) => (
                  <li key={index} className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        <span className="font-bold">{feature.featureName}</span>{" "}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img className="rounded-xl" src={image} alt={imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivers;
