import React from "react";

const CheckedList = () => {
  return (
    <div className="flex w-full">
      <div className="max-w-[1300px] w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex flex-col">
        <div className=" mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight ">
            Checked List
          </h2>
          <p className="mt-1 text-gray-600 ">
            Checked List Description goes here.
          </p>
        </div>

        <div className="list max-w-[700px] mx-auto flex w-full justify-between gap-12">
          <ul className="space-y-3 text-sm">
            <div className="flex flex-col gap-4">
              <img
                className="w-[600px] rounded-xl"
                src="/assets/drivers/img10.jpg"
                alt=""
              />
              <h2 className="text-2xl font-bold md:leading-tight ">
                Checked List
              </h2>
            </div>
            <li className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white ">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-800 ">Marketing Taxi Drivers</span>
            </li>

            <li className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white ">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-800 ">Marketing Taxi Drivers</span>
            </li>

            <li className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white ">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-800 ">Marketing Taxi Drivers</span>
            </li>
          </ul>

          <ul className="space-y-3 text-sm">
            <div className="flex flex-col mb-4 gap-4">
              <img
                className="w-[600px] rounded-xl"
                src="/assets/drivers/img10.jpg"
                alt=""
              />
              <h2 className="text-2xl font-bold md:leading-tight ">
                Checked List
              </h2>
            </div>
            <li className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white ">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-800 ">FAQ Marketing Taxi Drivers</span>
            </li>
            <li className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white ">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-800 ">FAQ Marketing Taxi Drivers</span>
            </li>
            <li className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white ">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-800 ">
                License Marketing Taxi Drivers
              </span>
            </li>

            <li className="flex gap-x-3">
              <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white ">
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
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="text-gray-800 ">
                Terms & Conditions Marketing Taxi Drivers
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckedList;
