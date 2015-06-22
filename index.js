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

/**
 * Testa se o servidor está ligado
 */
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

/**
 * Procura cidades a 20km de distancia de um ponto (relativo a cidade de Porto Alegre)
 * Exemplo de comando equivalente em cURL e resultado pode ser visto em ./queries/
 */
client.search({
  index: 'brasil',
  type: 'municipio',
  body: {
    "query": {
      "filtered": {
        "filter": {
          "geo_distance": {
            "distance": "20km",
            "location": {
              "lat": -30.033,
              "lon": -51.23
            }
          }
        }
      }
    }
  }
}).then(function (resp) {
  console.log(resp);
}, function (err) {
  console.trace(err.message);
});