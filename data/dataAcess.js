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
  return db('tasks as t')
  .select('t.task_descr', 't.task_notes', 't.completed', 'p.project_name', 'p.project_descr')
  .join('projects as p', 'p.project_id', 't.project_id');
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