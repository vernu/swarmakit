# Stage 1: Build the Storybook
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json from the my-storybook-app directory
COPY app/package.json app/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application from the app directory into the container
COPY app/ ./
COPY app/.storybook ./app/.storybook

# Build Storybook to generate static files
RUN npm run build-storybook

RUN ls /app

# Stage 2: Set up the Python FastAPI App
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy the Storybook static build from the previous stage to the nginx public directory
COPY --from=build /app/storybook-static /app/storybook-static

COPY app/ ./

# Copy the requirements.txt into the container
COPY requirements.txt .

# Install the required Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy your FastAPI app code (ensure you have a Python file that serves the static files)
COPY app/ /app

chmod -R 755 /app/storybook-static
chmod -R 755 /app/public

# Expose the port on which FastAPI will run
EXPOSE 80

# Command to run the FastAPI app
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

CMD ["npm", "run", "storybook"]
