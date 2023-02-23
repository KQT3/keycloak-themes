```
docker stop keycloak_name && docker rm keycloak_name && \
docker stop postgres_name && docker rm postgres_name && \
docker volume rm postgres_data \
docker-compose up -d
```

```
http://0.0.0.0:8080/auth/
http://localhost:8080/auth/
```

##### List databases 
```
docker exec -it postgres_name psql -U postgres -c "\l"
```