FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build Next.js app
RUN npm run build && npm run export

# Production image
FROM node:18-alpine

WORKDIR /app

# Install http-server to serve static files
RUN npm install -g http-server

# Copy built files from builder
COPY --from=builder /app/out ./out

EXPOSE 3000

CMD ["http-server", "out", "-p", "3000", "-c-1"]
