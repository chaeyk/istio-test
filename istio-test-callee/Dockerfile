FROM node:18-alpine as build

WORKDIR /app
COPY src *.js *.json  /app/
RUN npm i && npm run build

FROM node:18-alpine as runtime

WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules/
COPY --from=build /app/dist /app/dist/

CMD ["node", "dist/main"]
