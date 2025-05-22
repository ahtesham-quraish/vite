# Use Node 18 base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install tools globally
RUN npm install -g prettier eslint vite

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy rest of the source
COPY . .

# Optional version checks
RUN prettier --version && eslint --version && vite --version

RUN ls -la node_modules/@eslint/js

# Default command (not used in CI)
CMD ["npm", "run", "dev"]
