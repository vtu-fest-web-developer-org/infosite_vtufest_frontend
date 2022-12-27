FROM node:18

RUN mkdir -p /data/nodeapp
WORKDIR /data/nodeapp

RUN npm install

COPY package.json /data/nodeapp/


COPY . /data/nodeapp/

RUN npm install 
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /data/nodeapp/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]