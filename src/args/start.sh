#!/usr/bin/env bash

path=$(pwd)
printf "%s\n $path"

node "$path/src/args/server.js" --title=my_node
