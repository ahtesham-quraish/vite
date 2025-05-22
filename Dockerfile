# Use Node 18 base image
FROM node:18-alpine

# Install dependencies and tools
RUN npm install -g pnpm prettier eslint vite

# Set working directory
WORKDIR /app

# Copy only package files to install deps
COPY package*.json ./
RUN pnpm install

# Copy the rest of the code
COPY . .

# Default command (not needed for CI, but helpful for local testing)
CMD ["pnpm", "dev"]
