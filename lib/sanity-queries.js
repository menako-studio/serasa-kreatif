// GROQ queries for fetching content from Sanity CMS

// Query to retrieve all portfolio case studies resolved with asset URLs
export const allCaseStudiesQuery = `*[_type == "caseStudy"] | order(_createdAt desc) {
  "slug": slug.current,
  title,
  client,
  category,
  "image": image.asset->url,
  "imageBanner": imageBanner.asset->url,
  description,
  challenge,
  approach,
  results,
  metrics[] {
    label,
    value
  },
  tags,
  timeline,
  role,
  "gallery": gallery[].asset->url,
  instagramLinks
}`

// Query to retrieve a single case study by slug
export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  client,
  category,
  "image": image.asset->url,
  "imageBanner": imageBanner.asset->url,
  description,
  challenge,
  approach,
  results,
  metrics[] {
    label,
    value
  },
  tags,
  timeline,
  role,
  "gallery": gallery[].asset->url,
  instagramLinks
}`
