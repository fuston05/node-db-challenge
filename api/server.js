const express = require('express');
const helmet = require('helmet');
const server = express();

const projectsRouter = require('../data/projectsRouter');
const resourcesRouter = require('../data/resourcesRouter');
const tasksRouter = require('../data/tasksRouter');

server.use(express.json());
server.use(helmet());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
  res.send(`<h1>Welcome to my humble server!</h1>`);
})//end server.get

//fallback case
server.use(function notFound() {
  res.status(404).json({ error: "Could not find what you are looking for" });
});

module.exports = server;