#!/bin/bash

STRAPI_USER_FIRSTNAME="$1"
STRAPI_USER_LASTNAME="$2"
STRAPI_USER_EMAIL="$3"
STRAPI_USER_PASSWORD="$4"

request_body="{\"email\":\"$STRAPI_USER_EMAIL\",\"password\":\"$STRAPI_USER_PASSWORD\",\"firstname\":\"$STRAPI_USER_FIRSTNAME\",\"lastname\":\"$STRAPI_USER_LASTNAME\"}"
api_url="$protocol://$hostname:$port"

response=$(curl -s -X POST -H "Content-Type: application/json" -d "$request_body" "$api_url/admin/register-admin")

#npx strapi admin:create-user --firstname="$STRAPI_USER_FIRSTNAME" --lastname="$STRAPI_USER_LASTNAME" --#email="$STRAPI_USER_EMAIL" --password="$STRAPI_USER_PASSWORD"

echo "Strapi user created"
