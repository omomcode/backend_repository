#!/bin/bash

token="$1"
protocol="$2"
hostname="$3"
port="$4"

api_url="$protocol://$hostname:$port/admin/api-tokens"

frontend_token=$(curl -s -H "Authorization: Bearer $token" "$api_url")
echo $frontend_token