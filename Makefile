PORT ?= 5000
.DEFAULT_GOAL := dev

gen:
	yarn gen

install:
	yarn

build: install gen
	yarn build

dev: gen
	yarn dev --port $(PORT)

stories:
	yarn storybook

server: gen
	yarn server --port $(PORT)

