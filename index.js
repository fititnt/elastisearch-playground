/**
 * Checa apenas coneccao com Elasticsearch. Veja outros arquivos
 *
 * @license       Public Domain
 * @author        Emerson Rocha Luiz <emerson@alligo.com.br>
 */

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: Infinity,
  // undocumented params are appended to the query string
  hello: "elasticsearch!"
}, function (error) {
  if (error) {
    console.trace('Seu Elasticsearch está desligado. Resolva isso antes de começar');
  } else {
    console.log('Elasticsearch está ligado');
  }
});