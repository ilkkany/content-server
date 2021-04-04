const SaveJson = require('../filesystem');

export default {
    Mutation: {
        saveGrid: (parent, args) => {
            SaveJson(args);
            return {
                grid: ""
            }
        },
      }
}