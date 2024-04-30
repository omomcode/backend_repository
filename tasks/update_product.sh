#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

response=$(curl -s -H "Authorization: Bearer $token" "$api_url/productcms/find")
echo $response
prods=($(echo "$response" | jq -r '.[] | @base64'))
ids=()
for prod in "${prods[@]}"; do
    decoded_row=$(echo "$prod" | base64 --decode)
	id=$(echo "$decoded_row" | jq -r '.id')
	ids+=("$id")
done

counter=0

json_data=$(cat storeconfig.yaml | yq e -o=json -)
response_object=$(echo "$json_data" | jq '.data.product')
readarray -t objects < <(jq -c '.[]' <<< "$response_object")

for row in "${objects[@]}"; do
  row_id=$(echo "$row" | jq -r '.id')

  product_element="${product_array[$counter]}"
  counter=$((counter + 1))

  json_temp_additional=$(echo "$product_element" | jq -c '{"media": ., "publishedAt": "'"$(date +%s)"'"}')

  merged_json=$(jq -n --argjson row "$row" --argjson json_temp_additional "$json_temp_additional" '$row * $json_temp_additional')
  json_payload=$(echo "$merged_json" | jq -c '{"data": .}')
  
  if [[ " ${ids[@]} " =~ " $row_id " ]]; then
    curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/productcms/update/$row_id"
  else
    curl -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/productcms/create"
  fi
done
