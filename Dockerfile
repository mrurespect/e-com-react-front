# Use node image as base
FROM node:latest as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else to the working directory
COPY . .

# Build React app
RUN npm run build

# Production environment
FROM nginx:alpine

# Copy build files to nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
