#!/bin/bash

# this script copies WIP components into the App, so you can test them in the app
# run it like this...
#
# yarn copyWipToApp ../PatchworkApp/apps/mobile

DESTINATION=${1}
PROJECT_NAME="`cat ./package.json | grep -Eo '"name"[^,]*' | grep -Eo '[^:]*$' | grep -o '".*"' | sed 's/"//g'`"
if [ -z "$DESTINATION" ]
then
  echo
  echo "Please provide the path to your project." 1>&2
  exit 64
fi

ABS_PATH="${DESTINATION}/node_modules/${PROJECT_NAME}"
if [ ! -d "`eval echo ${ABS_PATH}`" ]
then
  echo "Create folder ${ABS_PATH}"
  mkdir -pv $ABS_PATH
fi

echo "Start sync files to ${ABS_PATH}"
rsync -Pu ./package.json $ABS_PATH
rsync -Pru --delete --exclude="*.test.*" ./src $ABS_PATH
rsync -Pru --delete --exclude="*.test.*" ./lib $ABS_PATH
