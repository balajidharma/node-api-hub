FROM node:24-alpine

ARG WWWUSER
ARG WWWGROUP

WORKDIR /app

USER ${WWWUSER}

CMD ["tail", "-f", "/dev/null"]
