FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and yarn lock file
COPY package.json ./
COPY yarn.lock ./

# Install app dependencies
RUN yarn install

# Copy all other source code to work directory
COPY . ./

EXPOSE 5000
# Start
CMD [ "yarn", "dev" ]
