FROM node:16.7

# Create app directory
# RUN mkdir -p /src
COPY ./pics /src/pics
WORKDIR /src/pics
# WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

RUN npm install
RUN npm install --save axios
# RUN npm install -g create-react-app
# RUN create-react-app jsx

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .

EXPOSE 3000
# CMD [ "node", "index.js" ]
CMD [ "npm", "start" ]
