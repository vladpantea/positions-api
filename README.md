# Express-api

![Nodejs](https://www.seeklogo.net/wp-content/uploads/2015/09/nodejs-logo-vector-download-200x200.jpg)
Nodejs Express API written in node 12 + Dockerfile and deployment.yaml

## Installation & Usage

node server.js

docker build -t positions-api:v0.0.1 . 

docker run -p 5090:5090 positions-api:v0.0.1

kubectl apply -f deployment.yaml

### Software
    OS              Alpine
    Runtime         NodeJS
