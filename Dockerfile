FROM php:8.2-apache

# Enable Apache mod_rewrite (optional but useful)
RUN a2enmod rewrite

# Copy your project files into the container
COPY . /var/www/html/

# Set correct permissions
RUN chown -R www-data:www-data /var/www/html
