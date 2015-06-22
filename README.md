# Elastisearch Playground
Prova de conceito com Elasticsearch + NodeJS + cURL.
Atualmente é util como prova de conceito de converter de uma base de dados 
tradicional e importar em uma base NoSQL, o Elasticsearch.

Nessa prova de conceito, os dados usados são dos municípios brasileiros.

A base de dados com municípios brasileiros, entre outras, pode ser obtida de
http://fititnt.github.io/gis-dataset-brasil/

## Requisitos
1. Instalar Elastisearch
2. (opcional) Instalar plugin https://github.com/jettro/elasticsearch-gui

## Como usar
1. `git clone git@github.com:fititnt/elastisearch-playground.git`
2. npm install
3. Execute `create_municipio_type.sh` para seu elasticsearch entender o tipo "municipio"
4. Execute `import_municipio.sh` para importar dados dos municipios

Se nada deu errado, você deve ter em seu Elasticsearch 5566 documentos de
cada município brasileiro. Pode usar esses scripts de conversão de dados
como referência para fazer algo funcional em seu projeto

## Imagens

Exemplod e busca por 'Porto Alegre' no Elastisearch já alimentado por conteúdo de exemplo. Usa cliente Postman

![Alt text](https://cloud.githubusercontent.com/assets/812299/8275248/dfbdf99c-1877-11e5-9788-7f25c32af1e6.png "Exemplod e busca por 'Porto Alegre' no Elastisearch já alimentado por conteúdo de exemplo. Usa cliente Postman")
