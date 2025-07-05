FROM node:20 AS base

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

FROM base AS development

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

FROM base AS build

ARG VITE_API_URL

ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

FROM node:20 AS production

WORKDIR /app

COPY --from=build /app/dist ./dist
RUN npm install -g serve

EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]