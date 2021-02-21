#!/usr/bin/make

# Default command
c ?= "/bin/bash"

.DEFAULT_GOAL := help

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

.PHONY: init npm_install run pull

#: Setup project after repo clone
init:
	docker-compose pull
	make npm_install

#: Install npm packages
npm_install:
	docker-compose run --rm web_app make npm_install

#: Run project
run:
	docker-compose up

#: Git pull latest remote updates
pull:
	git pull

#:
#: Docker containers
#:

.PHONY: web_app

#: Alias for web_app container
web_app:
	docker-compose run --rm web_app $c
