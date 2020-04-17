FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm i --no-package-lock
RUN npm i @vue/cli --no-package-lock -g
COPY . /app
RUN npm run build

FROM nginx:stable-alpine
RUN mkdir /public_html
RUN mkdir /public_html/upload
COPY --from=build /app/dist /public_html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]