#!/bin/bash

export DATABASE_USER="root"
export DATABASE_PASSWORD="root"
export FRONTEND_DATABASE_NAME="ecommerce_ldl_test"
export FRONTEND_DATABASE_HOST="localhost"
export DB_ROOT_USER="root"
export DB_ROOT_PASSWORD="root"
export FRONTEND_DATABASE_PORT="3306"
export FRONTEND_DUMP_NAME="ecommerce-frontend-clean"
frontend_token="$1"
hostname="$2"
port="$3"
protocol="$4"

api_url="$protocol://$hostname:$port"

current_dir=$(pwd)

cd frontend

if [ "$DATABASE_HOST" = "localhost" ]; then
  sed -i 's/MYSQL_HOST=.*/MYSQL_HOST=127.0.0.1/' .env.development
else
  sed -i "s/MYSQL_HOST=.*/MYSQL_HOST=$FRONTEND_DATABASE_HOST/" .env.development
fi
sed -i "s/MYSQL_DATABASE=.*/MYSQL_DATABASE=$FRONTEND_DATABASE_NAME/" .env.development
sed -i "s/MYSQL_USER=.*/MYSQL_USER=$DATABASE_USER/" .env.development
sed -i "s/MYSQL_PASSWORD=.*/MYSQL_PASSWORD=$DATABASE_PASSWORD/" .env.development
sed -i "s/MYSQL_PORT=.*/MYSQL_PORT=$FRONTEND_DATABASE_PORT/" .env.development
sed -i "s/NEXT_PUBLIC_CMS_API_TOKEN=.*/NEXT_PUBLIC_CMS_API_TOKEN=$frontend_token/" .env.development
sed -i "s/NEXT_PUBLIC_CMS_UPLOAD_URL=.*/NEXT_PUBLIC_CMS_UPLOAD_URL=$api_url/" .env.development
sed -i "s/NEXT_PUBLIC_CMS_API_URL=.*/NEXT_PUBLIC_CMS_API_URL=$api_url/" .env.development

if [ "$DATABASE_HOST" = "localhost" ]; then
  sed -i 's/MYSQL_HOST=.*/MYSQL_HOST=127.0.0.1/' .env.local
else
  sed -i "s/MYSQL_HOST=.*/MYSQL_HOST=$FRONTEND_DATABASE_HOST/" .env.local
fi
sed -i "s/MYSQL_DATABASE=.*/MYSQL_DATABASE=$FRONTEND_DATABASE_NAME/" .env.local
sed -i "s/MYSQL_USER=.*/MYSQL_USER=$DATABASE_USER/" .env.local
sed -i "s/MYSQL_PASSWORD=.*/MYSQL_PASSWORD=$DATABASE_PASSWORD/" .env.local
sed -i "s/MYSQL_PORT=.*/MYSQL_PORT=$FRONTEND_DATABASE_PORT/" .env.local
sed -i "s/NEXT_PUBLIC_CMS_API_TOKEN=.*/NEXT_PUBLIC_CMS_API_TOKEN=$frontend_token/" .env.local
sed -i "s/NEXT_PUBLIC_CMS_UPLOAD_URL=.*/NEXT_PUBLIC_CMS_UPLOAD_URL=$api_url/" .env.local
sed -i "s/NEXT_PUBLIC_CMS_API_URL=.*/NEXT_PUBLIC_CMS_API_URL=$api_url/" .env.local

if [ "$DATABASE_HOST" = "localhost" ]; then
  sed -i 's/MYSQL_HOST=.*/MYSQL_HOST=127.0.0.1/' .env.production
else
  sed -i "s/MYSQL_HOST=.*/MYSQL_HOST=$FRONTEND_DATABASE_HOST/" .env.production
fi
sed -i "s/MYSQL_DATABASE=.*/MYSQL_DATABASE=$FRONTEND_DATABASE_NAME/" .env.production
sed -i "s/MYSQL_USER=.*/MYSQL_USER=$DATABASE_USER/" .env.production
sed -i "s/MYSQL_PASSWORD=.*/MYSQL_PASSWORD=$DATABASE_PASSWORD/" .env.production
sed -i "s/MYSQL_PORT=.*/MYSQL_PORT=$FRONTEND_DATABASE_PORT/" .env.production
sed -i "s/NEXT_PUBLIC_CMS_API_TOKEN=.*/NEXT_PUBLIC_CMS_API_TOKEN=$frontend_token/" .env.production
sed -i "s/NEXT_PUBLIC_CMS_UPLOAD_URL=.*/NEXT_PUBLIC_CMS_UPLOAD_URL=$api_url/" .env.production
sed -i "s/NEXT_PUBLIC_CMS_API_URL=.*/NEXT_PUBLIC_CMS_API_URL=$api_url/" .env.production

cd "$current_dir"

chmod +x tasks/db_createuser_giveprivileges.sh
source tasks/db_createuser_giveprivileges.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$FRONTEND_DATABASE_HOST" "$DB_ROOT_USER" "$DB_ROOT_PASSWORD"

# Create database if it doesn't exist
chmod +x tasks/db_create_database.sh
source tasks/db_create_database.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$FRONTEND_DATABASE_NAME" "$FRONTEND_DATABASE_HOST"


# Import dump to newly created database
chmod +x tasks/db_import_dump.sh
source tasks/db_import_dump.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$FRONTEND_DATABASE_NAME" "$FRONTEND_DUMP_NAME" "$FRONTEND_DATABASE_HOST"

chmod +x tasks/frontend_db_insert.sh
source tasks/frontend_db_insert.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$FRONTEND_DATABASE_NAME"

cd frontend

npm i

npm run build

nohup npm run start &