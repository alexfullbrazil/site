import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `${process.env.VITE_GRAPHQL_ENDPOINT}`,
  watch: true,
  watchConfig: {
    usePolling: true,
    interval: 1000,
  },

  documents: './src/graphql/**/*.graphql',
  generates: {
    './src/gql/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};
export default config;
