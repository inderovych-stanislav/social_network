#!/usr/bin/make

# Default command
c ?= "/bin/bash"

.DEFAULT_GOAL := help

docker-compose=COMPOSE_HTTP_TIMEOUT=120 DOCKER_CLIENT_TIMEOUT=120 /usr/bin/docker-compose
git=git
make=make

docom = $(docker-compose)
docom_run = ($(docom) run --rm $1 $2)

#:
#: Usage
#:
.PHONY: help

#: List available commands

help:
	@grep --color=never -P "^(#:|[a-z_/]+:)" ./Makefile | sed ':a ; /#:[^\n]*/ {N; s/\n\([^#]\)/|\1/ ; Ta}' | column -t -s'|' | sed -e 's/^#://' | sed -e 's/\:[^\:]*$$//'

#:
#: Run commands
#:

.PHONY: docom init npm_install run pull env_copy

#: Alias to docker-compose
docom:
	$(docom) $(c)

#: Setup project after repo clone
init:
	make env_copy
	$(docom) pull web_app gateway mysql
	$(docom) build api_app
	make vendors_install
	make file_permissions
	make api_app c="make key_generate"

#: Install vendors packages
vendors_install:
	make web_app c="make npm_install"
	make api_app c="make composer_install"

#: Run project
run:
	$(docom) up

#: Git pull latest remote updates
pull:
	$(git) pull

#: Copy .env from examples
env_copy:
	cp .env.example .env
	cp website/.env.example website/.env
	cp api/.env.example api/.env

#: Set proper files/folders permissions
file_permissions:
	make api_app c="make file_permissions"

#:
#: Docker containers
#:

.PHONY: web_app api_app

#: Alias for web_app container
web_app:
	$(call docom_run, web_app, $c)

#: Alias for api_app container
api_app:
	$(call docom_run, api_app, $c)
