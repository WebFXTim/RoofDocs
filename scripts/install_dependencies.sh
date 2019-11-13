#!/bin/bash


# IF Directory Does Not Exist
if [[ ! -e /home/ec2-user/roofdocs-web ]]; then

    # Create Directory
    mkdir /home/ec2-user/roofdocs-web

    # Change into Directory
    cd /home/ec2-user/roofdocs-web

    # Clone Repo
    sudo git clone git@bitbucket.org:theroofdocs/web.git

    # Change into web directory
    cd web

else

    # Change into Directory
    cd /home/ec2-user/roofdocs-web/web

    # Pull latest changes
    git pull

fi

# Install Node_Modules, Create Build
sudo npm install
npm run build






