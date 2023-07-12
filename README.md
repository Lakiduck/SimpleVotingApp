# SimpleVotingApp
Utilise Node.JS and Redis cache to create a simple voting app, hosted using docker containers 

Create 2 .env files once cloned into local repo

One at root context with the following variables

REDIS_IP=<YOUR REDIS IP ADDRESS>

REDIS_PORT=<YOUR REDIS PORT>

SUBNET=<DESIRED SUBNET FOR DOCKER USER DEFINED BRIDGE NETWORK>

One at ./votes context with the following variables

REDIS_IP=<YOUR REDIS IP ADDRESS>

REDIS_PORT=<YOUR REDIS PORT>


[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/lakshan/default%2FSimpleVotingApp?type=cf-1&key=eyJhbGciOiJIUzI1NiJ9.NjRhODBlMDRiMzhmMWE0ZjJmOGU1NDM1.WZ3KsmZXKh8FHUwSpwwbQxRQ1H3oEdD-r1kcfygS_HM)]( https://g.codefresh.io/pipelines/edit/new/builds?id=64a80f60b1cd78209a192a63&pipeline=SimpleVotingApp&projects=default&projectId=64a80edeece52917afc6b12f)