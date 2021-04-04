import fs from 'fs';

module.exports = function (data) {
    const file = `${process.env.MONOGAME_GRID_VARIANTS_DIR}/${data.biome.toLowerCase()}/${data.position.toLowerCase()}.json`

    const rawdata = fs.readFileSync(file, 'utf8');
    const fileContent = JSON.parse(rawdata);

    const nextFileContents = fileContent.length > 0 ? [...fileContent].push(data.grid) : [data.grid];
    
    fs.writeFile(file, JSON.stringify(nextFileContents), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    
        console.log("JSON file has been saved.");
    });
}