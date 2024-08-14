// src/app/blogs/page.js
import Blogs from "@/components/Blogs/Blogs";
import { client, urlFor } from "@/sanity/lib/client";

const page = async () => {
  const pageDataArray = await client.fetch(
    `*[_type == "page" && slug.current == "blogs"][0]{
      title,
      _type,
      sections[]{
        _type == "blogSection" => {
          title,
          _type,
          blogs[]->{
            title,
            description,
            slug,
            image{
              asset->{
                _id,
                url
              }
            },
            altText,
            sponsored,
            linkText,
            linkHref
          }
        }
      }
    }`
  );

  const pageData = pageDataArray; // Since we already fetch the first item with `[0]`

  console.log("pageData: ", pageData);

  return (
    <div>
      {pageData.sections.map((section, index) => {
        console.log("section is here: ",section._type, section.blogs);
        switch (section._type) {
          case "blogSection":
            return (
              <Blogs key={index} title={section.title} blogs={section.blogs} />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default page;
