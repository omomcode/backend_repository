#!/bin/bash

# Define MySQL credentials
MYSQL_USER="$1"
MYSQL_PASSWORD="$2"
MYSQL_DB="$3"

section=$(yq e -o=j -I=0 '.data_types[]' frontend.yaml)

while IFS= read -r section; do
    id=$(echo "$section" | yq e '.id')
    type_name=$(echo "$section" | yq e '.type_name')
    defaultWidth=$(echo "$section" | yq e '.defaultWidth // ""')
    defaultHeight=$(echo "$section" | yq e '.defaultHeight // ""')
    custom=$(echo "$section" | yq e '.custom // ""')

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO data_types (id, type_name, defaultWidth, defaultHeight, custom) VALUES ('$id', '$type_name', '$defaultWidth', '$defaultHeight', '$custom');"
done <<< "$data_types"


section=$(yq e -o=j -I=0 '.layout[]' frontend.yaml)

while IFS= read -r section; do
    id=$(echo "$section" | yq e '.id')
    col_from=$(echo "$section" | yq e '.col_from // "NULL"')
    col_to=$(echo "$section" | yq e '.col_to // "NULL"')
    row_from=$(echo "$section" | yq e '.row_from // "NULL"')
    row_to=$(echo "$section" | yq e '.row_to // "NULL"')
    custom_style=$(echo "$section" | yq e '.custom_style // "NULL"')

    # Display the extracted fields
    echo "id: $id, col_from: $col_from, col_to: $col_to, row_from: $row_from, row_to: $row_to, custom_style: $custom_style"

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO layout (id, col_from, col_to, row_from, row_to, custom_style) VALUES ('$id', $col_from, $col_to, $row_from, $row_to, '$custom_style');"
done <<< "$layout_data"

section=$(yq e -o=j -I=0 '.logic[]' frontend.yaml)

while IFS= read -r section; do
    id=$(echo "$section" | yq e '.id')
    resolvable=$(echo "$section" | yq e '.resolvable // "NULL"')
    tags=$(echo "$section" | yq e '.tags')

    # Display the extracted fields
    echo "id: $id, resolvable: $resolvable, tags: $tags"

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO logic (id, resolvable, tags) VALUES ('$id', $resolvable, '$tags');"
done <<< "$logic_data"

section=$(yq e -o=j -I=0 '.o_data[]' frontend.yaml)

while IFS= read -r section; do
    id=$(echo "$section" | yq e '.id')
    relations=$(echo "$section" | yq e '.relations')

    # Display the extracted fields
    echo "id: $id, relations: $relations"

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO o_data (id, relations) VALUES ('$id', '$relations');"
done <<< "$o_data_data"

section=$(yq e -o=j -I=0 '.objects[]' frontend.yaml)

while IFS= read -r section; do
    uuid=$(echo "$section" | yq e '.uuid')
    layout=$(echo "$section" | yq e '.layout // "NULL"')
    o_data=$(echo "$section" | yq e '.o_data // "NULL"')
    logic=$(echo "$section" | yq e '.logic // "NULL"')
    children=$(echo "$section" | yq e '.children')

    # Display the extracted fields
    echo "uuid: $uuid, layout: $layout, o_data: $o_data, logic: $logic, children: $children"

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO objects (uuid, layout, o_data, logic, children) VALUES ('$uuid', $layout, $o_data, $logic, '$children');"
done <<< "$objects_data"

section=$(yq e -o=j -I=0 '.resolvable_tags[]' frontend.yaml)

while IFS= read -r section; do
    id=$(echo "$section" | yq e '.id')
    t_name=$(echo "$section" | yq e '.t_name // "NULL"')

    # Display the extracted fields
    echo "id: $id, t_name: $t_name"

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO resolvable_tags (id, t_name) VALUES ('$id', '$t_name');"
done <<< "$resolvable_tags_data"

section=$(yq e -o=j -I=0 '.resolved_data[]' frontend.yaml)

while IFS= read -r section; do
    id=$(echo "$section" | yq e '.id')
    d_type=$(echo "$section" | yq e '.d_type // "NULL"')
    o_data=$(echo "$section" | yq e '.o_data // "NULL"')

    # Display the extracted fields
    echo "id: $id, d_type: $d_type, o_data: $o_data"

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO resolved_data (id, d_type, o_data) VALUES ('$id', $d_type, '$o_data');"
done <<< "$resolved_data_data"

section=$(yq e -o=j -I=0 '.tags[]' frontend.yaml)

while IFS= read -r section; do
    id=$(echo "$section" | yq e '.id')
    t_name=$(echo "$section" | yq e '.t_name // "NULL"')

    # Display the extracted fields
    echo "id: $id, t_name: $t_name"

    # Insert the extracted fields into the MySQL database
    mysql -u$MYSQL_USER -p$MYSQL_PASSWORD $MYSQL_DB -e "INSERT INTO tags (id, t_name) VALUES ('$id', '$t_name');"
done <<< "$tags_data"