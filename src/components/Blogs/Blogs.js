import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

const Blogs = ({ title, blogs }) => {
  console.log("blogs in blogs", blogs);
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            {title}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Stay in the know with insights from industry experts.
          </p>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Stay in the know with insights from industry experts.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => {
            console.log("maped blog", blog);
            const heroImage = urlFor(blog.image).url();
            return (
              <Link
                key={index}
                className={`group flex flex-col focus:outline-none `}
                href={blog.slug.current}
              >
                <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                  <img
                    className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                    src={heroImage}
                    alt={blog.altText}
                  />
                  {blog.sponsored && (
                    <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                      Sponsored
                    </span>
                  )}
                </div>

                <div className={`"flex-auto p-4 md:p-6" : "mt-7"}`}>
                  <h3 className={`text-xl `}>
                    <span className="font-bold">{blog.title}</span>
                  </h3>
                  <p className={`mt-3 `}>{blog.description}</p>
                  {/* <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  {insight.linkText}
                  <svg
                    className="shrink-0 size-4"
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
