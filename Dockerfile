FROM node:16.13.0

WORKDIR /nuxi-green/
COPY ./package.json /nuxi-green/
COPY ./yarn.lock /nuxi-green/
RUN yarn install

COPY . /nuxi-green/
CMD yarn dev