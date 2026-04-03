// src/lib/sanity/fetchBlogs.ts

import client from '../../sanityClient';

export interface BlogEntry {
  _id: string;
  title: string;
  title_hi?: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  excerpt_hi?: string;
  content?: any;
  content_hi?: any;
  publishedAt: string;
  coverImage?: {
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
      title_hi,
      slug,
      excerpt,
      excerpt_hi,
      content,
      content_hi,
      publishedAt,
      coverImage {
        asset -> {
          url
        }
      }
    }
  `;

  const blogs = await client.fetch(query);
  return blogs;
};
