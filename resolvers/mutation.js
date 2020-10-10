const resolvers = {
    Query: {
        test: () => "test"
    },
    Mutation: {
      newGameAssetProject: (parent, args) => {
            return {
                projectName: args.name
            }
      },
    }
};

module.exports = resolvers;