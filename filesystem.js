const fs = require('fs');

module.exports = function (data) {
    var toWrite = null;
    var filename = `${process.env.MONOGAME_GRID_VARIANTS_DIR}/${data.biome.toLowerCase()}/${data.position.toLowerCase()}.json`

    let rawdata = fs.readFileSync(filename);
    let existingData = JSON.parse(rawdata);

    if (existingData.length > 0) {
        toWrite = existingData
        toWrite.push(data.grid);
    } else {
        toWrite = [data.grid];
    }
    
    fs.writeFile(filename, JSON.stringify(toWrite), 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    
        console.log("JSON file has been saved.");
    });
}