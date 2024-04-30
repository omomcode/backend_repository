#!/bin/bash


token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/upload"


json_data=$(cat storeconfig.yaml | yq e -o=json -)
response_object=$(echo "$json_data" | jq '.data.images')
readarray -t objects < <(jq -c '.[]' <<< "$response_object")

for row in "${objects[@]}"; do
  row_url=$(echo "$row" | jq -r '.url')
  if echo "$row" | jq -e '.fileInfo' >/dev/null 2>&1; then
    row_fileInfo=$(echo "$row" | jq -r '.fileInfo | tostring')
    fileInfo="{ \"caption\": \"$row_fileInfo\" }"
    image_response=$(curl -X POST -H "Authorization: Bearer $token" -F "files=@$row_url" -F "fileInfo=$fileInfo" "$api_url")
  else
    image_response=$(curl -X POST -H "Authorization: Bearer $token" -F "files=@$row_url" "$api_url")
  fi
  first_element=$(echo "$image_response" | jq -r '.[]')
  imgs+=("$first_element")
done