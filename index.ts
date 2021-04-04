import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { ApolloServer } from 'apollo-server-koa';
import { Query, Mutation } from './resolvers';
require('dotenv').config()
const typeDefs = require('./schema')

const server = new ApolloServer({
  cacheControl: {
    defaultMaxAge: 5,
  },
  typeDefs,
  resolvers: {
      Query: Query,
      Mutation: Mutation,
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