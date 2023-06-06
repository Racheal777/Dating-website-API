# Fetching the minified node image on apline linux
FROM node:lts-alpine

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR  /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


# Installing dependencies
RUN npm install 

# Copying all the files in our project
COPY . .

# Exposing server port
EXPOSE 5000

# Starting our application
CMD ["node" , "src/index.ts"]


