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


[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/lakshan-pro/SimpleVotingApp%2Fprod?type=cf-1&key=eyJhbGciOiJIUzI1NiJ9.NjUxMDE4Y2Y4YzczYzM2NGY0ZDBjOGM5.huY5IhYpPQZAfZ_ft_35yURvIJKgezDkPNbx8How9sM)]( https://g.codefresh.io/pipelines/edit/new/builds?id=651029fd447e0cbe5999d426&pipeline=prod&projects=SimpleVotingApp&projectId=65101a95971ceefdd2966126)
