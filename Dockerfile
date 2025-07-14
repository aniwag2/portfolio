# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
# This ensures that npm install is only re-run if these files change
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application for production
# This command depends on your package.json "build" script
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
# This keeps the final image small and secure
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port your Next.js app will run on
EXPOSE 3001

# Set the command to run the Next.js application in production mode
# This command depends on your package.json "start" script
CMD ["npm", "start"]