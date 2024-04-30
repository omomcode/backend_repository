#!/bin/bash

# root user is the user who can grant privileges
export DATABASE_USER="root"
export DATABASE_PASSWORD="root"
export DATABASE_NAME="ecommerce"
export DUMP_NAME="ecommerce-20240402184403"
export DATABASE_HOST="localhost"
export DB_ROOT_USER="root"
export DB_ROOT_PASSWORD="root"
export STRAPI_USER_FIRSTNAME="MishaZ"
export STRAPI_USER_LASTNAME="ZhivankoZ"
export STRAPI_USER_EMAIL="alexmitrovic993@gmail.com"
export STRAPI_USER_PASSWORD="Smederevo123"
export protocol="http"
export hostname="localhost"
export port="1337"
export FRONTEND_DATABASE_NAME="ecommerce_ldl"
export FRONTEND_DATABASE_HOST="localhost"
export FRONTEND_PORT="3306"


current_dir=$(pwd)

product_array=()
category_array=()

dependency_flag=1

if [[ $dependency_flag -eq 1 ]]; then
    if ! command -v yq &> /dev/null
    then
		echo "root" | sudo -S snap install yq
    fi
	chmod +x tasks/install_dependencies.sh
	source tasks/install_dependencies.sh
fi

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

cd "$current_dir"

# Create database user if it doesn't exist and give it all privileges
chmod +x tasks/db_createuser_giveprivileges.sh
source tasks/db_createuser_giveprivileges.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$DATABASE_HOST" "$DB_ROOT_USER" "$DB_ROOT_PASSWORD"

# Create database if it doesn't exist
chmod +x tasks/db_create_database.sh
source tasks/db_create_database.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$DATABASE_NAME" "$DATABASE_HOST"

# Import dump to newly created database
chmod +x tasks/db_import_dump.sh
source tasks/db_import_dump.sh "$DATABASE_USER" "$DATABASE_PASSWORD" "$DATABASE_NAME" "$DUMP_NAME" "$DATABASE_HOST"

cd backend

npm i @strapi/strapi@v4.15.0
npm i

npm run build
nohup npm run start &

sleep 30

cd "$current_dir"

cd tasks

Create strapi user
chmod +x strapi_createuser.sh
./strapi_createuser.sh "$STRAPI_USER_FIRSTNAME" "$STRAPI_USER_LASTNAME" "$STRAPI_USER_EMAIL" "$STRAPI_USER_PASSWORD" 


Login strapi user
chmod +x strapi_loginuser.sh
token=$(./strapi_loginuser.sh "$STRAPI_USER_EMAIL" "$STRAPI_USER_PASSWORD" "$protocol" "$hostname" "$port" | tr -d '\n')

chmod +x create_frontend_token.sh
frontend_token=$(./create_frontend_token.sh "$token" "$protocol" "$hostname" "$port" | tr -d '\n')

check_yaml_field() {
  local field=$(yq eval "$1" storeconfig.yaml)
  if [ -n $field ]; then
    return 1
  else
    return 0
  fi
}


if check_yaml_field '.data.images'; then
  source upload_images.sh "$token" "$protocol" "$hostname" "$port"

  # Iterate through the array using a for loop
  for element in "${imgs[@]}"; do
	caption=$(echo "$element" | jq -r '.caption')
	
	# Check if the caption contains "product"
    if [[ $caption == *"product"* ]]; then
	  echo "if"
      product_array+=("$element")
    fi

    # Check if the caption contains "category"
    if [[ $caption == *"category"* ]]; then
	  echo else
      category_array+=("$element")
    fi
  done
fi

echo productimages "${product_array[@]}"
echo categoryimages "${category_array[@]}"
if check_yaml_field '.data.profile'; then
  chmod +x update_profile.sh
  ./update_profile.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.currency'; then
  chmod +x update_currency.sh
  ./update_currency.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.timezone'; then
  chmod +x update_timezone.sh
  ./update_timezone.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.billing'; then
  chmod +x update_billing.sh
  ./update_billing.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.conversionrate'; then
  chmod +x update_conversionrate.sh
  ./update_conversionrate.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.category'; then
  chmod +x update_category.sh
  source update_category.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.subcategory'; then
  chmod +x update_subcategory.sh
  ./update_subcategory.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.tax'; then
  chmod +x update_tax.sh
  ./update_tax.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.shippingpackage'; then
  chmod +x update_package.sh
  ./update_shippingpackage.sh "$token" "$protocol" "$hostname" "$port"
fi
if check_yaml_field '.data.product'; then
  chmod +x update_product.sh
  source update_product.sh "$token" "$protocol" "$hostname" "$port"
fi


cd "$current_dir"

chmod +x run_frontend.sh
./run_frontend.sh "frontend_token" "$hostname" "$port" "$protocol" "$FRONTEND_DATABASE_NAME"