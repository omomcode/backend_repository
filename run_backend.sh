#!/bin/bash

# root user is the user who can grant privileges
export DATABASE_USER="root"
export DATABASE_PASSWORD="root"
export DATABASE_NAME="ekomerc"
export DUMP_NAME="ecommerce-20240402184403"
export DATABASE_HOST="localhost"
export DB_ROOT_USER="root"
export DB_ROOT_PASSWORD="root"
export STRAPI_USER_FIRSTNAME="MishaZ"
export STRAPI_USER_LASTNAME="ZhivankoZ"
export STRAPI_USER_EMAIL="tihiway2@outlook.com"
export STRAPI_USER_PASSWORD="StrongPassword1"
export protocol="http"
export hostname="localhost"
export port="1337"

dependency_flag=1

cd tasks

if [[ $dependency_flag -eq 1 ]]; then
    if ! command -v yq &> /dev/null
    then
        echo "yq is not installed. Installing yq using snap..."
		echo "Smederevo123" | sudo -S snap install yq
		# sudo snap install yq
    fi
	./install_dependencies.sh
fi

cd ..

cd backend

if [ "$DATABASE_HOST" = "localhost" ]; then
  sed -i 's/DATABASE_HOST=.*/DATABASE_HOST=127.0.0.1/' .env
else
  sed -i "s/DATABASE_HOST=.*/DATABASE_HOST=$DATABASE_HOST/" .env
fi
sed -i "s/DATABASE_NAME=.*/DATABASE_NAME=$DATABASE_NAME/" .env
sed -i "s/DATABASE_USERNAME=.*/DATABASE_USERNAME=$DATABASE_USER/" .env
sed -i "s/DATABASE_PASSWORD=.*/DATABASE_PASSWORD=$DATABASE_PASSWORD/" .env
if [ "$hostname" = "localhost" ]; then
  sed -i 's/^HOST=.*/HOST=0.0.0.0/' .env
else
  sed -i "s/^HOST=.*/HOST=$hostname/" .env
fi
sed -i "s/^PORT=.*/PORT=$port/" .env

if [ "$DATABASE_HOST" = "localhost" ]; then
  sed -i 's/DATABASE_HOST=.*/DATABASE_HOST=127.0.0.1/' .env.production
else
  sed -i "s/DATABASE_HOST=.*/DATABASE_HOST=$DATABASE_HOST/" .env.production
fi

sed -i "s/DATABASE_NAME=.*/DATABASE_NAME=$DATABASE_NAME/" .env.production
sed -i "s/DATABASE_USERNAME=.*/DATABASE_USERNAME=$DATABASE_USER/" .env.production
sed -i "s/DATABASE_PASSWORD=.*/DATABASE_PASSWORD=$DATABASE_PASSWORD/" .env.production

if [ "$hostname" = "localhost" ]; then
  sed -i 's/^HOST=.*/HOST=0.0.0.0/' .env.production
else
  sed -i "s/^HOST=.*/HOST=$hostname/" .env.production
fi

sed -i "s/^PORT=.*/PORT=$port/" .env.production

cd ..
cd tasks

# Create database user if it doesn't exist and give it all privileges
chmod +x db_createuser_giveprivileges.sh
./db_createuser_giveprivileges.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$DATABASE_HOST" "$DB_ROOT_USER" "$DB_ROOT_PASSWORD"

# Create database if it doesn't exist
chmod +x db_create_database.sh
./db_create_database.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$DATABASE_NAME" "$DATABASE_HOST"

# Import dump to newly created database
chmod +x db_import_dump.sh
./db_import_dump.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$DATABASE_NAME" "$DUMP_NAME" "$DATABASE_HOST"

cd ..
cd backend

npm i

npm i @strapi/strapi

npm run build

nohup npm run start &

cd ..
cd tasks

# Create strapi user
chmod +x strapi_createuser.sh
./strapi_createuser.sh "$STRAPI_USER_FIRSTNAME" "$STRAPI_USER_LASTNAME" "$STRAPI_USER_EMAIL" "$STRAPI_USER_PASSWORD" 


# Login strapi user
chmod +x strapi_loginuser.sh
token=$(./strapi_loginuser.sh "$STRAPI_USER_EMAIL" "$STRAPI_USER_PASSWORD" "$protocol" "$hostname" "$port" | tr -d '\n')
chmod +x update_profile,sh
./update_profile.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_currency.sh
./update_currency.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_timezone.sh
./update_timezone.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_billing.sh
./update_billing.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_conversionrate.sh
./update_conversionrate.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_category.sh
./update_category.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_subcategory.sh
./update_subcategory.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_product.sh
./update_product.sh "$token" "$protocol" "$hostname" "$port"
chmod +x update_tax.sh
./update_tax.sh "$token" "$protocol" "$hostname" "$port"