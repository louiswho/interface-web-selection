# STAGE - BUILD
FROM node:carbon as build
ARG ANGULAR_CLI=6.0.7
RUN npm install -g @angular/cli@${ANGULAR_CLI}
ENTRYPOINT [ "ng" ]
WORKDIR /docker/projects/revaturecloud/selection
COPY projects/revaturecloud/selection/package*.json ./
RUN npm install
WORKDIR /docker
COPY package*.json ./
RUN npm install
COPY . ./
RUN ng build @revaturecloud/selection --prod
RUN ng build

# STAGE - DEPLOY
FROM nginx:1.14 as deploy
ARG APP_VERSION=0.1.0
LABEL app.version=${APP_VERSION}
COPY --from=build /docker/dist/interface-web-selection /usr/share/nginx/html
EXPOSE 80
