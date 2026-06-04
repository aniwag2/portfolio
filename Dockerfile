# Stage 1: Build the Astro static site
FROM node:20-alpine AS builder

WORKDIR /app

# Copy manifests first to leverage Docker layer caching for installs
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source and build to /app/dist
COPY . .
RUN npm run build

# Stage 2: Lightweight production image that serves the static output
FROM node:20-alpine

WORKDIR /app

# A tiny static file server; serves the built site on port 3001
RUN npm install -g sirv-cli@3

# Copy only the built output and the start script
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

EXPOSE 3001

# Runs: sirv dist --host 0.0.0.0 --port 3001  (see package.json "start")
CMD ["npm", "start"]
