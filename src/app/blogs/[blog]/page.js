// src/app/blogs/[blog]/page.js
import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
  const { blog } = params;

  const blogPost = await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      description,
      image{
        asset->{
          _id,
          url
        }
      },
      body,
      sponsored
    }`,
    { slug: blog }
  );

  if (!blogPost) {
    return <div>Blog not found</div>;
  }

  const customComponents = {
    types: {
      block: ({ value }) => {
        const { style = "normal", children = [] } = value;

        if (!children || !children.length) {
          return null;
        }

        switch (style) {
          case "blockquote":
            return (
              <blockquote className="border-l-4 border-gray-300 pl-4">
                {children.map((child, index) => (
                  <span key={index}>{child.text || ""}</span>
                ))}
              </blockquote>
            );
          case "h1":
            return (
              <h1 className="text-4xl font-bold">
                {children.map((child, index) => (
                  <span key={index}>{child.text || ""}</span>
                ))}
              </h1>
            );
          case "h2":
            return (
              <h2 className="text-3xl font-semibold">
                {children.map((child, index) => (
                  <span key={index}>{child.text || ""}</span>
                ))}
              </h2>
            );
          case "h3":
            return (
              <h3 className="text-2xl font-medium">
                {children.map((child, index) => (
                  <span key={index}>{child.text || ""}</span>
                ))}
              </h3>
            );
          default:
            return (
              <p>
                {children.map((child, index) => (
                  <span key={index}>{child.text || ""}</span>
                ))}
              </p>
            );
        }
      },
    },
    marks: {
      big: ({ children }) => (
        <span style={{ fontSize: "1.5em" }}>{children}</span>
      ),
      small: ({ children }) => (
        <span style={{ fontSize: "0.75em" }}>{children}</span>
      ),
      color: ({ children, mark }) => (
        <span style={{ color: mark.color }}>{children}</span>
      ),
    },
  };

  return (
    <div>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="mb-6">
            <div className="flex gap-1 justify-center text-main-700 font-bold mb-2 items-center m-auto">
              <Link href="/blogs">Blogs</Link> <span>/</span>
              <span>{blogPost.title}</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900">
              {blogPost.title}
            </h1>
            <p className="mt-2 text-gray-600">{blogPost.description}</p>
          </div>

          <div className="mb-6">
            <Image
              src={urlFor(blogPost.image).url()}
              alt={blogPost.image.alt || "Blog Image"}
              width={800}
              height={400}
              className="w-full rounded-lg"
            />
          </div>

          {/* Table of Contents */}
          <div>
            <h2 className="text-3xl font-bold">Contents</h2>
            <ul>
              {blogPost.body
                .filter((block) => block._type === "section")
                .map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index}`}>{section.title}</a>
                  </li>
                ))}
            </ul>
          </div>
          {blogPost.body.map((section, index) => {
            if (section._type != "section") {
              return (
                <div key={index}>
                  <PortableText value={[section]} components={customComponents} />
                </div>
              );
            }
          })}

          {/* Section Content */}
          <div>
            {blogPost.body
              .filter((block) => block._type === "section")
              .map((section, index) => (
                <div key={index} id={`section-${index}`}>
                  <h1 className="text-3xl font-bold">{section.title}</h1>
                  <PortableText
                    value={section.content}
                    components={customComponents}
                  />
                </div>
              ))}
          </div>

          {/* Sponsored Section */}
          {blogPost.sponsored && (
            <div className="mt-8 bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                This post is sponsored content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
