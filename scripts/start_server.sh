#!/bin/bash
echo Starting server

cd /app
echo Application build in progress
sudo npm run build

echo Starting application...
sudo pm2 start npm -- run production