import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.CONTENTFUL_GRAPHQL_URL!]: {
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
  },
  documents: 'app/**/*.tsx',
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
    'schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
