// src/lib/sanity/fetchBlogs.ts

import client from '../../sanityClient';

export interface BlogEntry {
  _id: string;
  title: {
    en: string;
    hi: string;
  };
  slug: {
    current: string;
  };
  excerpt: {
    en: string;
    hi: string;
  };
  content: {
    en: any;
    hi: any;
  };
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
}

export const fetchBlogs = async (): Promise<BlogEntry[]> => {
  const query = `
    *[_type == "blog"] | order(publishedAt desc){
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      mainImage {
        asset -> {
          url
        }
      }
    }
  `;

  const blogs = await client.fetch(query);
  return blogs;
};
