const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  type GameAssetProject {
    projectName: String
  }
  type Query {
    test: String
  }
  type Mutation {
    newGameAssetProject(name: String): GameAssetProject!
  }
`;

module.exports = typeDefs;