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
    saveGrid(grid: [Int!]): Grid,
  }
`;

module.exports = typeDefs;