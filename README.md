# node-typescript

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=parte -e MYSQL_USER=mrparte -e MYSQL_PASSWORD=parte -e MYSQL_DATABASE=iks_db -p 3306:3306 -d mysql:8


docker run --name phpmyadmin-container -d --link mysql-container:db -p 8080:80 phpmyadmin/phpmyadmin
