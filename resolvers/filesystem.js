const fs = require('fs');

module.exports = function (data){
    // parse json
    // var arr = JSON.parse(data.grid);
    
    // stringify JSON Object
    var jsonContent = JSON.stringify([data.grid]);
    console.log(jsonContent);
    
    fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }
    
        console.log("JSON file has been saved.");
    });
}