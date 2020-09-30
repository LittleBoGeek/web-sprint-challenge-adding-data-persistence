const express = require('express');

const server = express();

const helmet = require('helmet');

const projectsRouter = require('./projectsRouter/projects_router')

server.use('/api/projects', projectsRouter);
server.use(helemt());
server.use(express.json())

module.exports  = server