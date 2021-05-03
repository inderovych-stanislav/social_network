
FROM php:7.4-fpm

EXPOSE 9000

RUN rm -f /etc/apt/apt.conf.d/docker-clean; \
    echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache

WORKDIR /app

RUN --mount=type=cache,target=/var/cache/apt \
    --mount=type=cache,target=/var/lib/apt \
    set -eux; \
    apt update \
    && apt install -y --no-install-recommends \
        libmcrypt-dev \
        libmagickwand-dev \
        libxslt-dev \
        libgmp-dev \
        libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
        libzip-dev \
        zip \
        bash \
        coreutils \
    && pecl install mcrypt \
    && docker-php-ext-enable   mcrypt \
    && docker-php-ext-configure gmp \
    && docker-php-ext-install pdo_mysql xsl gmp zip exif

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer