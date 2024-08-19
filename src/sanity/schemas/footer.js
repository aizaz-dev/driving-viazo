const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The logo displayed in the footer.",
    },
    {
      name: "footerSections",
      title: "Footer Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "name",
                      title: "Link Name",
                      type: "string",
                    },
                    {
                      name: "href",
                      title: "Link URL",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Social Icon",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "href",
              title: "Social Link URL",
              type: "url",
            },
          ],
        },
      ],
      description: "Social media icons with corresponding URLs.",
    },
    {
      name: "subscribeText",
      title: "Subscribe Text",
      type: "string",
      description: 'Text to display for subscription, e.g., "Stay up to date".',
    },
    {
      name: "subscribePlaceholder",
      title: "Subscribe Placeholder",
      type: "string",
      description:
        'Placeholder text for the email input, e.g., "Enter your email".',
    },
    {
      name: "subscribeButtonText",
      title: "Subscribe Button Text",
      type: "string",
      description: 'Text for the subscribe button, e.g., "Subscribe".',
    },
    {
      name: "subscribeDescription",
      title: "Subscribe Description",
      type: "string",
      description:
        'Description text under the subscription form, e.g., "New UI kits or big discounts. Never spam."',
    },
    {
      name: "copyrightText",
      title: "Copyright Text",
      type: "string",
      description:
        'The copyright text at the bottom of the footer, e.g., "© 2022 Preline. All rights reserved."',
    },
  ],
};

export default footer;
