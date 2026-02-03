FROM node:24-alpine

ARG WWWUSER
ARG WWWGROUP

# Install git and other potential build dependencies
RUN apk update && apk add --no-cache git

# Set the working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

USER ${WWWUSER}

CMD ["tail", "-f", "/dev/null"]
