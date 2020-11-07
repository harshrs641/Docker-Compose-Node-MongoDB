# Connect 2 compose images in docker


This repository contains one Dockerfile for Custom Node container and connecting it to the [DockeHub mongo](https://hub.docker.com/_/mongo) container image using Docker-Compose (Multi Containers). 

## Install

As a prerequisite, you need [Docker](https://docker.com) to be installed.


  
To re-build this image from the docker-compose:

	$ docker-compose up --build

## Usage

To check the containers of the build file:

	$ docker-compose ps

To run the build file:

	$ docker-compose up
