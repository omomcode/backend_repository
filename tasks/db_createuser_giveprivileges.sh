#!/bin/bash

DATABASE_USER="$1"
DATABASE_PASSWORD="$2"
DATABASE_HOST="$3"
DB_ROOT_USER="$4"
DB_ROOT_PASSWORD="$5"

# Check if the MySQL user exists, and create it if it doesn't
# if ! mysql -u"$DB_ROOT_USER" -p"$DB_ROOT_PASSWORD" -h"$DATABASE_HOST" -e "SELECT 1 FROM mysql.user WHERE user = '$DATABASE_USER';" | grep -q 1; then
    # mysql -u"$DB_ROOT_USER" -p"$DB_ROOT_PASSWORD" -h"$DATABASE_HOST" -e "CREATE USER '$DATABASE_USER'@'$DATABASE_HOST' IDENTIFIED BY '$DATABASE_PASSWORD';"
# fi

sudo mysql -u"$DB_ROOT_USER" -p"$DB_ROOT_PASSWORD" -h "$DATABASE_HOST" <<EOF
ALTER USER '$DATABASE_USER'@'$DATABASE_HOST' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO '$DATABASE_USER'@'$DATABASE_HOST' WITH GRANT OPTION;
flush privileges;
EOF

sudo mysql -u"$DB_ROOT_USER" -p"$DB_ROOT_PASSWORD" -h "$DATABASE_HOST" <<EOF
ALTER USER 'root'@'127.0.0.1' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'127.0.0.1' WITH GRANT OPTION;
flush privileges;
EOF

sudo mysql -u"$DB_ROOT_USER" -p"$DB_ROOT_PASSWORD" -h "$DATABASE_HOST" <<EOF
ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;
flush privileges;
EOF

echo "User created"
