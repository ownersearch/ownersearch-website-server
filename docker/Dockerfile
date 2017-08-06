FROM mhart/alpine-node

RUN apk add --update git

WORKDIR /app

ADD package.json .
RUN npm install --production

ADD src src

# no ssl certificates for accessing https github so bypass for now
RUN git config --system http.sslverify false

RUN git clone https://github.com/ownersearch/ownersearch-website-live.git --depth 1 website

ENTRYPOINT npm run start
