#!/bin/bash

# here we update the server and install node and npm
echo Installing required dependencies
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install nodejs -y
sudo apt-get -y install npm

# check to make sure the symbolic link for nodejs node exists
echo checking for nodejs symlink
file="/usr/bin/node"
if [ -f $file ] && [ ! -L $file ] ; then
  echo "$file exists and is not a symlink"
  sudo ln -s /usr/bin/nodejs
else
  echo "$file exists and is already a symlink"
fi

# install the application using npm
echo Installing application with npm
cd /var/www/
sudo npm install

echo Installing pm2
sudo npm install pm2 -g