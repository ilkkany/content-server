import fs from 'fs';

export const saveGridToFile = (data) => {
    const file = `${process.env.MONOGAME_GRID_VARIANTS_DIR}/${data.biome.toLowerCase()}/${data.position.toLowerCase()}.json`
    try {
        let nextFileContents = null;
        const rawdata = fs.readFileSync(file, 'utf8');
        const existingData = JSON.parse(rawdata);

        if (existingData.length > 0) {
            nextFileContents = existingData
            nextFileContents.push(data.grid);
        } else {
            nextFileContents = [data.grid];
        }

        fs.writeFile(file, JSON.stringify(nextFileContents), 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
        
            console.log("JSON file has been saved.");
        });
    } catch (e) {
        console.error(e);
    }
}