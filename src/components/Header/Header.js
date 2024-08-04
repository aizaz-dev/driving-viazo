"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex flex-wrap bg-main-700 md:justify-start md:flex-nowrap z-50 w-full py-7">
      <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4  mx-auto">
        <div className="md:col-span-3">
          {/* Logo */}
          <Link href="/templates/creative-agency/index.html">
            <span
              className="flex-none rounded-xl text-white text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              aria-label="Preline"
            >
              LOGO
            </span>
          </Link>
          {/* End Logo */}
        </div>

        {/* Button Group */}
        <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <button
            type="button"
            className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-black"
          >
            Sign in
          </button>
          <button
            type="button"
            className="py-2 px-5 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white text-black border"
          >
            Hire us
          </button>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              onClick={toggleNav}
              aria-expanded={isNavOpen}
              aria-controls="hs-navbar-hcail"
              aria-label="Toggle navigation"
            >
              <svg
                className={`${isNavOpen ? "hidden" : "block"} shrink-0 size-4`}
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
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className={`${isNavOpen ? "block" : "hidden"} shrink-0 size-4`}
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* End Button Group */}

        {/* Collapse */}
        <div
          id="hs-navbar-hcail"
          className={`hs-collapse ${
            isNavOpen ? " open" : "close"
          } overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6`}
          aria-labelledby="hs-navbar-hcail-collapse"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
            <div>
              <Link href="#">
                <span
                  className="relative inline-block text-white focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 "
                  aria-current="page"
                >
                  Work
                </span>
              </Link>
            </div>
            <div>
              <Link href="#">
                <span className="inline-block text-white">
                  Services
                </span>
              </Link>
            </div>
            <div>
              <Link href="#">
                <span className="inline-block text-white">
                  About
                </span>
              </Link>
            </div>
            <div>
              <Link href="#">
                <span className="inline-block text-white">
                  Careers
                </span>
              </Link>
            </div>
            <div>
              <Link href="#">
                <span className="inline-block text-white">
                  Blog
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </header>
  );
};

export default Header;
