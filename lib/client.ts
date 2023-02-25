import { createClient } from '@urql/core';

export const client = createClient({
  url: process.env.CONTENTFUL_GRAPHQL_URL!,
  fetchOptions: {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
    },
  },
});
