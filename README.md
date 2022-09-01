https://phoenixnap.com/kb/mysql-docker-container

docker run -itd --name datmo -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 mysql:8.0.30

## Create Table
```
CREATE TABLE products (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    price varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    imageUrl varchar(255),
    PRIMARY KEY (id)
);
```


### Error
```
error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

#### Soln
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[password]';

### Image Encoder 
https://elmah.io/tools/base64-image-encoder/

