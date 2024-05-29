import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: [
    "http://localhost:4000/graphql",
  ],
  documents: ["apps/web/src/**/*.ts", "apps/web/src/**/*.tsx"],
};

export default config;
