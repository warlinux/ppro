FROM ubuntu:latest
USER root
WORKDIR /opt/app
COPY ./app/package.json /opt/app/package.json
RUN apt-get update && \
    apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get -y install nodejs && \
    npm install
COPY ./app .
EXPOSE 3000
CMD /opt/app/run.sh
