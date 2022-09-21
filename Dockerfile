FROM node:14.18.1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Set environment variables
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

# Bundle app source
COPY . /usr/src/app
RUN npm run build

EXPOSE 80
CMD [ "npm", "run", "start" ]