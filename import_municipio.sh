#!/bin/bash
#
# Importa em batelada todos os municipios
# License       Public Domain
# Author        Emerson Rocha Luiz <emerson@alligo.com.br>

# Exemplo de como importar um municipio
# curl -XPOST 'localhost:9200/brasil/municipio' -d '{"geocodigo":1200336,"nome":"M","uf":"AC","regiao":"Norte","mesoregiao":"VALE DO JURUA","microregiao":"CRUZEIRO DO SUL","location":{"lat":-7.614,"lon":-72.896}}'

# Importa em batelada todos os municipios
curl -s -XPOST localhost:9200/brasil/municipio/_bulk --data-binary @./data/municipios_elasticsearch.json