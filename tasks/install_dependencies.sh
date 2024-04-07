#!/bin/bash

echo 'Smederevo123' | sudo -S DEBIAN_FRONTEND=noninteractive apt-get -y install mariadb-server
echo 'Smederevo123' | sudo -S systemctl start mariadb.service
echo 'Smederevo123' | sudo -S apt-get install jq
echo 'Smederevo123' | sudo -S apt install curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
echo 'Smederevo123' | sudo -S apt-get install -y nodejs
