const fs = require('fs');

module.exports = function (data) {
    var jsonContent = JSON.stringify([data.grid]);
    var filename = data.biome + "_GRID_"+data.position +".json"
    fs.writeFile(filename, jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    
        console.log("JSON file has been saved.");
    });
}