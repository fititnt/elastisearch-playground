#!/bin/bash
#
# Cria um tipo no Elasticsearch
#
# License       Public Domain
# Author        Emerson Rocha Luiz <emerson@alligo.com.br>

curl -XPOST 'localhost:9200/brasil/_mapping/municipio' -d @./data/municipios_type.json