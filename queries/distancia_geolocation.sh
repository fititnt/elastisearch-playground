
# Procura cidades a 20km de distancia de um ponto (relativo a cidade de Porto Alegre)
curl -XPOST 'localhost:9200/brasil/municipio/_search?pretty' -d '{
  "query": {
    "filtered": {
      "filter": {
        "geo_distance": {
          "distance":      "20km", 
          "location": {
            "lat":  -30.033,
            "lon": -51.23
          }
        }
      }
    }
  }
}'