const SaveJson = require('../../filesystem');

export const Mutation = {
    saveGrid: (parent, args) => {
        SaveJson(args);
        return {
            grid: ""
        }
    }
}