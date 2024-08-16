"/src/app/blogs/[blog]/page.js";
// src/app/blogs/[blog]/page.js
import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

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

  return (
    <div>
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {blogPost.title}
            </h1>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              {blogPost.description}
            </p>
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

          <div className="prose dark:prose-dark max-w-none">
            <PortableText value={blogPost.body} />
          </div>

          {blogPost.sponsored && (
            <div className="mt-8 bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-neutral-300">
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
