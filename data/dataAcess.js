const db= require('../db_config');

module.exports= {
  findTasks,
  findResources,
  findProjects,
  addTask,
  addResource,
  addProject
}

function findTasks(){
  return db('tasks');
}

function findResources(){
  return db('resources');
}

function findProjects(){
  return db('projects');
}
//______________________________________________

function addTask(task){
  return db('tasks')
  .insert(task);
}

function addResource(resource){
  return db('resources')
  .insert(resource);
}

function addProject(project){
  return db('projects')
  .insert(project);
}