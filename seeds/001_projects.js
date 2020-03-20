
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'project_1', project_descr: 'this is the project description for project 1'},
        {project_name: 'project_2', project_descr: 'this is the project description for project 2'}
      ]);
    });
};
