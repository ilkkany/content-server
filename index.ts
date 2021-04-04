import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { ApolloServer } from 'apollo-server-koa';
import { Queries, Mutations } from './resolvers';

const typeDefs = require('./schema');
require('dotenv').config()

const server = new ApolloServer({
  cacheControl: {
    defaultMaxAge: 5,
  },
  typeDefs,
  resolvers: {
      Query: Queries,
      Mutation: Mutations,
  }
});

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

app.use(koaBody());

router.post("/graphql", server.getMiddleware());
router.get("/graphql", server.getMiddleware());

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);