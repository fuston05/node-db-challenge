
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { project_id: 1, task_descr: 'This will hold all the datailed information describing task 1', task_notes: "this is where any special notes will be kept for this task 1" },

        { project_id: 1, task_descr: 'This will hold all the datailed information describing task 2', task_notes: "this is where any special notes will be kept for this task 2" },

        { project_id: 2, task_descr: 'This will hold all the datailed information describing task 3', task_notes: "this is where any special notes will be kept for this task 3" },

        { project_id: 2, task_descr: 'This will hold all the datailed information describing task 4', task_notes: "this is where any special notes will be kept for this task 4" },

        { project_id: 2, task_descr: 'This will hold all the datailed information describing task 5', task_notes: "this is where any special notes will be kept for this task 5" }
      ]);
    });
};
