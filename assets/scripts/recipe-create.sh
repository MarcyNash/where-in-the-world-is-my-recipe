#!/bin/bash

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/recipes"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"
  --data '{
      "recipe": {
        "name":  "Chicken Soup",
        "location": "Howdy2 Cookbook",
        "comment": "used bones"
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
  # }'
