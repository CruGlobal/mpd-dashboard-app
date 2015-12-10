FROM cruglobal/base-image-php:latest
MAINTAINER cru.org <wmd@cru.org>

# Nginx is pointed at /var/www/app as document root
# App is installed at /home/app

# Configure Newrelic
RUN sed -i -e"s/REPLACE_WITH_REAL_KEY/$NEWRELIC_KEY/" /usr/local/etc/php/conf.d/newrelic.ini \
	&& sed -i -e"s/PHP Application/$PROJECT_NAME \($ENVIRONMENT\)/" /usr/local/etc/php/conf.d/newrelic.ini

# Install composer dependencies
RUN composer install --no-dev

RUN npm install \
	&& bower --allow-root install \
	&& ./node_modules/.bin/gulp build

# Symlink depending on environment
RUN if [ "$ENVIRONMENT" = "production" ]; then \
		ln -nsf /home/app/dist /var/www/app; \
	else \
		ln -nsf /home/app/src /var/www/app; \
	fi
