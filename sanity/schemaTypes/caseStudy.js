export const caseStudyType = {
  name: 'caseStudy',
  title: 'Case Study / Portfolio',
  type: 'document',
  fields: [
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'client',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Headline / Campaign Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageBanner',
      title: 'Hero Banner Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'challenge',
      title: 'The Challenge',
      type: 'text',
    },
    {
      name: 'approach',
      title: 'Our Approach',
      type: 'text',
    },
    {
      name: 'results',
      title: 'The Results',
      type: 'text',
    },
    {
      name: 'metrics',
      title: 'Key Performance Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'metric',
          fields: [
            { name: 'label', title: 'Metric Label (e.g. Organic Views)', type: 'string' },
            { name: 'value', title: 'Metric Value (e.g. 1.6M)', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags / Tags List',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'timeline',
      title: 'Project Timeline',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Our Role',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Gallery Showcase Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'instagramLinks',
      title: 'Instagram Post/Reel Embed Links',
      type: 'array',
      of: [{ type: 'url' }],
    },
  ],
}
