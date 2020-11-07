# base image
FROM node:alpine
# docker's working directory
WORKDIR /usr/app
# Copying dependencies
COPY ./package.json ./
# if new dependencies added, this will install them or else take node modules from cache 
RUN npm i 
# Copying our working directory to docker's working directory
COPY ./ ./
# start the server
CMD ["npm" ,"start"]