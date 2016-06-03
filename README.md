# mpd-dashboard-app
MPD Dashboard Application

This repository uses git-flow for feature and release management. All development should be on the staging branch or a fork of it.

## Installation on localhost
Clone the repo
```bash
git clone -b staging --recursive https://github.com/CruGlobal/mpd-dashboard-app.git mpd-dashboard-app
cd mpd-dashboard-app
```
Install Composer and Download PHP Dependencies
```bash
curl -sS https://getcomposer.org/installer | php
php composer.phar install
```
Copy provided config.php to the config directory
```bash
cp config.php config/
```

Install npm, bower and components (install bower may require sudo)
```bash
cd app
npm install
bower install
./node_modules/.bin/gulp build
```

Point your server at the mpd-dashboard-app directory as the document root and serve index.php as the entry point to the application.
