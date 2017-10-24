FROM node:8.2.1-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN apt-get update
RUN apt-get install unzip -y
RUN npm install gulp -g
RUN wget https://sonarsource.bintray.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-3.0.3.778-linux.zip
RUN unzip sonar-scanner-cli-3.0.3.778-linux.zip
ENV PATH="/usr/src/app/sonar-scanner-3.0.3.778-linux/bin:${PATH}"
RUN sonar-scanner -h

# Bundle app source
COPY . .
EXPOSE 3000
CMD [ "echo", "backend" ]