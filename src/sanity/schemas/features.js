export default {
  name: 'features',
  title: 'Features',
  type: 'object',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'featuresList',
      title: 'Features List',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
