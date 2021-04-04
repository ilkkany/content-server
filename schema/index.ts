import { gql } from 'apollo-server-koa';
import { loadTypedefsSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import path from 'path';

module.exports = (() => {
try {
  const documents = loadTypedefsSync(path.resolve(__dirname, '**/*.graphql'), {
    loaders: [
        new GraphQLFileLoader()
    ]
  });
  // todo - not optimal
  return gql`${documents.map(d => d.rawSDL).join()}`;
} catch (e) {
  console.error(e);
}
})()
