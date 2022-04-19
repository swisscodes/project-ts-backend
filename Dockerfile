FROM ubuntu:latest
LABEL author 'Obafemi Lawal' email 'swissbobo@gmail.com'
RUN apt-get -y update; apt-get install -y curl; apt-get install -y build-essential
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
WORKDIR /app/backend
COPY ./package.json .
RUN npm install
COPY . ./
ENV HOST_PORT 8000
ENV HOST_DEBUG 9229
ENV DBPORT 5432
EXPOSE $HOST_PORT
EXPOSE $HOST_DEBUG
EXPOSE $DBPORT
CMD ["node", "src/index.js"]