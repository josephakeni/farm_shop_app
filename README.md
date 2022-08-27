https://phoenixnap.com/kb/mysql-docker-container

docker run -itd --name datmo -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 mysql:8.0.30

### Error
```
error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

#### Soln
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[password]';