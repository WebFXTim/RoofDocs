#!/bin/bash

# remove site
rm -rf /home/ec2-user/web
echo "Previous Site Removed"
mkdir /home/ec2-user/web
cwd /home/ec2-user/web
npm install
