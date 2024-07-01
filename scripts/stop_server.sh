#!/bin/bash

echo Stopping server
sudo su
pm2 stop npm
exit