FROM node:22-alpine AS builder

WORKDIR /app

ARG PUBLIC_UMAMI_WEBSITE_ID
ARG PUBLIC_GITHUB_TOKEN

ENV PUBLIC_UMAMI_WEBSITE_ID=${PUBLIC_UMAMI_WEBSITE_ID}
ENV PUBLIC_GITHUB_TOKEN=${PUBLIC_GITHUB_TOKEN}

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
