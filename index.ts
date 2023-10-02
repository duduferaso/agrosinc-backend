import express from "express";
import { ApolloServer } from "apollo-server-express";
import { addResolversToSchema } from '@graphql-tools/schema'

const app = express();

import typeDefs from "./Modules/Schema"; 
import resolvers from "./Modules/Resolvers"; 

const schemaWithResolvers = addResolversToSchema({ schema: typeDefs, resolvers })
const server = new ApolloServer({
  schema: schemaWithResolvers
});

server.start().then(() => {
	server.applyMiddleware({
		app: app,
		path: "/",
	});
});

app.listen({port: 3000});

