const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Void
  type Query {
    test: String,
    createGrid: Grid
  }

  type Grid {
    grid: [[Int]]
  }
  type Mutation {
    saveGrid(grid: [Int!], position: String, biome: String): Grid,
  }
`;

module.exports = typeDefs;