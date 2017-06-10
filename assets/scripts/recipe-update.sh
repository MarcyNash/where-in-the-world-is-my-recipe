#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/recipes/${ID}"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
      "recipe": {
        "location": "Howdy Cookbook"
      }
  }'

  # data output from curl doesn't have a trailing newline
  echo

  # allowed updates
  # --data '{
  #     "recipe": {
  #       "location": "",
  #       "comment": ""
  #     }
