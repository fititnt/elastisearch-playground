var csv = require('csv');
var fs = require('fs');
var parse = require('csv-parse');
var municipios = {};
//var raw_csv = null;

var contents = fs.readFileSync('./data/municipios.csv').toString();
//console.log(contents);

parse(contents, {comment: '#', delimiter: "\t"}, function (err, output) {
  if (err) {
    console.log(err);
    return;
  }
  //console.log(output);
  if (output && output.length) {
    for (var i = 1; i < output.length; ++i) {
      municipios[output[i][1]] = {
        nome: output[i][2],
        uf: output[i][3],
        regiao: output[i][4],
        mesoregiao: output[i][5],
        microregiao: output[i][6],
        latitude: parseFloat(output[i][7].replace(',', '.')),
        longitude: parseFloat(output[i][8].replace(',', '.'))
      };
    }
    //console.log(municipios);
    fs.writeFileSync('./data/municipios.json', JSON.stringify(municipios));
  }
});