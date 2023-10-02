import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

const schema = loadSchemaSync("**/*.Schema.gql", { loaders: [new GraphQLFileLoader()] });

export default schema;
