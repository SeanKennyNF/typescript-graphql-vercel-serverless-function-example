import cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { send } from 'micro';
import { stubTypedefs } from "../public/dist/src/api/stub-typedefs.js";
import { stubResolvers } from "../public/dist/src/api/stub-resolvers.js";

const server = new ApolloServer({
  typeDefs: stubTypedefs,
  resolvers: stubResolvers,
  introspection: true,
});

await server.start();
const handler = server.createHandler({
  path: "/api/graphql",
});

const corsHandler = cors({allowMethods: ['POST']})((req, res) => req.method === 'OPTIONS' ? send(res, 200, 'ok') : handler(req, res))

export default corsHandler;

export const config = {
  api: {
    bodyParser: false,
  },
};