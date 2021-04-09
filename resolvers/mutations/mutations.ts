import { saveGridToFile } from '../../filesystem'

export const Mutation = {
    saveGrid: (parent, args) => {
        saveGridToFile(args);
        return {
            grid: ""
        }
    }
}