#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/admin/api-tokens"

json_data='{
  "lifespan": null,
  "description": "test description",
  "type": "full-access",
  "name": "test",
  "permissions": null
}'

frontend_token=$(curl -X POST -H "Authorization: Bearer $token" -H "Content-Type: application/json" -d "$json_data" "$api_url")

access_key=$(echo "$frontend_token" | jq -r '.data.accessKey')

echo "$access_key"