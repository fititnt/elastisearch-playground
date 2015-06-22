/**
 * Converte ./data/municipios.csv para um arquivo que pode ser importado em
 * em batelada com Elasticsearch
 *
 * @license       Public Domain
 * @author        Emerson Rocha Luiz <emerson@alligo.com.br>
 */

var csv = require('csv');
var fs = require('fs');
var parse = require('csv-parse');
var municipios = [];
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
    file_output = '';
    for (var i = 1; i < output.length; ++i) {
      file_output += JSON.stringify({
        create: {
          _index: "brasil",
          _type: "municipio",
          _id: parseInt(output[i][1], 10)
        }
      });
      file_output += "\n";
      file_output += JSON.stringify({
        geocodigo: parseInt(output[i][1], 10),
        nome: output[i][2],
        uf: output[i][3],
        regiao: output[i][4],
        mesoregiao: output[i][5],
        microregiao: output[i][6],
        location: {
          lat: parseFloat(output[i][7].replace(',', '.')),
          lon: parseFloat(output[i][8].replace(',', '.'))
        }
      });
      file_output += "\n";
    }
    //console.log(municipios);
    fs.writeFileSync('./data/municipios_elasticsearch.json', file_output);
  }
});