FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run seed

EXPOSE 3004

CMD ["npm", "run", "server"]

# NOTES TO SELF
# IF I SEED THE DATABASE, that means I need to first run a mongo container
# Look at the repo (3 or 4? maybe 5) and see how they do it and why it works.
# Then try running this docker file
# If it doesn't work, debug one line at a time


