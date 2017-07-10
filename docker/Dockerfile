FROM gcr.io/stemnapp/alpine-nodejs

ADD docker/root/etc /etc

EXPOSE 3080

WORKDIR /app

ADD package.json .
RUN npm install --production

ADD src src

# no ssl certificates for accessing https github so bypass for now
RUN git config --system http.sslverify false

RUN git clone https://github.com/stemn/stemn-website-live.git --depth 1 website
