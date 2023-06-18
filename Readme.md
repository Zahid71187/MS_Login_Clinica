MICROSERVICIO DE LOGIN PARA SISTEMA DE CLINICA

Se deben instalar los paquetes para correr el servicio
npm i

Instalar contenedores
docker-compose -f ./docker/docker-compose.yml up -d

Para correr el servicio
npm start

Para correr el servicio en modo debug
npm run debug

Enpoints

context:
host:port/clinica/v1

 health:
 /health

Autor
- Zahid Ramirez
- Carlos Martinez
