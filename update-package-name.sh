#!/bin/bash

PACKAGE_NAME=$1
if test z"$PACKAGE_NAME" = z; then
  DEFAULT_NAME=`basename $(pwd)`
  echo -n "Enter the package name (blank for $DEFAULT_NAME):"
  read PACKAGE_NAME

  if test z"$PACKAGE_NAME" = z; then
    PACKAGE_NAME=$DEFAULT_NAME
  fi
fi
echo package name is $PACKAGE_NAME

sed -i "s/microproject/$PACKAGE_NAME/g" .git/config
git ls-files | xargs sed -i "s/rect/$PACKAGE_NAME/g" && echo Now run git rm -f $0 to remove this file.
