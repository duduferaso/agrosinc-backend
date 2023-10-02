import path from "path";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const RESOLVER_ARRAY = loadFilesSync([path.join(__dirname, "./**/*.Resolvers.{ts,js}")], {
	extractExports: (fileExport) => fileExport.default,
});
const RESOLVERS = mergeResolvers(RESOLVER_ARRAY);

export default RESOLVERS;
