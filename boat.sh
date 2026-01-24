#!/usr/bin/env bash

# Service name defined in docker-compose.yml
SERVICE="node.test"

# Docker Compose commands
DOCKER_COMMANDS=("up" "down" "start" "stop" "restart" "build" "ps" "logs" "pull" "exec" "run")

if [ $# -eq 0 ]; then
    docker compose exec "$SERVICE" sh
    exit $?
fi

COMMAND="$1"
shift

if [[ " ${DOCKER_COMMANDS[*]} " == *" $COMMAND "* ]]; then
    docker compose "$COMMAND" "$@"
elif [ "$COMMAND" == "nx" ]; then
    docker compose exec "$SERVICE" npx nx "$@"
elif [ "$COMMAND" == "npm" ]; then
    docker compose exec "$SERVICE" npm "$@"
else
    docker compose exec "$SERVICE" "$COMMAND" "$@"
fi
