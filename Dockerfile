FROM node:latest as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY /uszn-vue-frontend/package.json /app/package.json
RUN npm install --silent
RUN npm install @vue/cli -g
COPY /uszn-vue-frontend /app
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
RUN mkdir /usr/share/nginx/html/upload
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]