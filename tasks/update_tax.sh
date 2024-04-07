#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/omcommerce"

response=$(curl -s -H "Authorization: Bearer $token" "$api_url/tax/find")
ids=($(echo "$response" | jq -r '.[].id'))

json_data=$(cat storeconfig.yaml | yq e -o=json -)
response_object=$(echo "$json_data" | jq '.data.tax')
readarray -t objects < <(jq -c '.[]' <<< "$response_object")

for row in "${objects[@]}"; do
  echo "this is a row" $row
  row_id=$(echo "$row" | jq -r '.id')
  json_temp=$(echo "$row" | jq -c '.')
  json_payload=$(echo "$json_temp" | jq -c '{"data": . }')
  echo $row_id
  if [[ " ${ids[@]} " =~ " $row_id " ]]; then
    curl -X PUT -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/tax/update/$row_id"
  else
    curl -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_payload" "$api_url/tax/create"
  fi
done
