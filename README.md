# mpd-dashboard-app
MPD Dashboard Application

This repository uses git-flow for feature and release management. All development should be on the staging branch or a fork of it.

## Installation on localhost
Clone the repo
```bash
git clone -b staging https://github.com/CruGlobal/mpd-dashboard-app.git mpd-dashboard-app
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

Install npm, bower and componenets (install bower may require sudo)
```bash
npm install -g bower
npm install
bower install
```

Point your server at the mpd-dashboard-app/src directory as the document root and serve index.php as the entry point to the application.
