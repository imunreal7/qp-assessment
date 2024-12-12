# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript files
RUN npm run build

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
