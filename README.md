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
