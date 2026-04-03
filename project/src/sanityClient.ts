// src/sanityClient.ts

import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'ghbom5go', 
  dataset: 'production',           // Usually 'production'
  apiVersion: '2024-06-20',        // Use current date (any recent date is fine)
  useCdn: true,                    // `true` for fast cached response
});

export default client;
