#!/usr/bin/make

.DEFAULT_GOAL := list

.PHONY: list
list:
	@echo ""

composer = php -d memory_limit=4096M /usr/bin/composer
artisan = php artisan

.PHONY: file_permissions composer_install composer_update artisan_clean key_generate db_migrate db_fresh

file_permissions:
	chown -R www-data:www-data bootstrap/cache
	chown -R www-data:www-data storage

composer_install:
	$(composer) install --no-suggest
	make artisan_clean
	$(composer) dump-autoload --optimize --classmap-authoritative

composer_update:
	$(composer) update
	make artisan_clean
	$(composer) dump-autoload --optimize --classmap-authoritative

key_generate:
	$(artisan) key:generate
	$(artisan) jwt:secret

artisan_clean:
	$(artisan) clear-compiled
	$(artisan) config:clear
	$(artisan) route:clear
	$(artisan) view:clear

db_migrate:
	$(artisan) migrate

db_fresh:
	$(artisan) migrate:fresh
