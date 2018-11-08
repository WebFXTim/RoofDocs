#!/bin/bash


# Change into Directory
cd /home/ec2-user/roofdocs-web

# Install Node_Modules, Create Build
npm install
npm run build

# Restart NGINX
sudo service nginx restart
