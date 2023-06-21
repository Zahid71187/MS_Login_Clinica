# MICROSERVICIO DE LOGIN PARA SISTEMA DE CLINICA

## Se deben instalar los paquetes para correr el servicio
```bash
$ npm i
```

## Instalar contenedores
```bash
$ docker-compose -f ./docker/docker-compose.yml up -d
```

## Para correr el servicio
```bash	
$ npm start
````
## Para correr el servicio en modo debug
```bash	
$ npm run debug
````
## Enpoints

host:port/clinica/v1

 health:
   - /health
  
  guardar usuario:
  - /usuarios

### Autor
- Zahid Ramirez
- Carlos Martinez
