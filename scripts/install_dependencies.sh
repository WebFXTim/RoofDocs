#!/bin/bash

# Remove Old Directory
if [ -d /home/ec2-user/roofdocs-web ]; then
   rm -rf /home/ec2-user/roofdocs-web
fi

# Create new Directory
mkdir /home/ec2-user/roofdocs-web

