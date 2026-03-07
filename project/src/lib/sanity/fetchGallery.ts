// src/lib/sanity/fetchGallery.ts

import client from '../../sanityClient';

export interface GalleryEntry {
    _id: string;
    title: string;
    title_hi?: string;
    image: {
        asset: {
            url: string;
        };
    };
    category?: string;
    date?: string;
}

export const fetchGallery = async (): Promise<GalleryEntry[]> => {
    const query = `
    *[_type == "gallery"] | order(date desc){
      _id,
      title,
      title_hi,
      category,
      date,
      image {
        asset -> {
          url
        }
      }
    }
  `;

    const gallery = await client.fetch(query);
    return gallery;
};
