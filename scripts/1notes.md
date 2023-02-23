#### Setup

```
docker stop keycloak_name && docker rm keycloak_name && \
docker stop postgres_name && docker rm postgres_name && \
docker volume rm postgres_data \
docker-compose up -d
```

##### Running on ports 8080

```
http://0.0.0.0:8080/auth/
http://localhost:8080/auth/
```

##### List databases (keycloak)

```
docker exec -it postgres_name psql -U postgres -c "\l"
```

##### Manually Setup Keycloak

```
Create Realm testrealms
Create Client testclient
Create user (user@email.com)
Create password (user@email.com)
Realm Settings -> Themes -> Login Theme -> testtheme

Keycloak Templates
Login Theme -> keycloak
Account Theme -> keycloak
Admin Theme -> keycloak
Email Theme ->
```

##### Copy Keycloak theme to Directory

```
docker cp keycloak_name:/opt/jboss/keycloak/themes/keycloak/ ./themes/new-theme
```
