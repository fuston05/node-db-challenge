
exports.up = function (knex) {
  return knex.schema
    .createTable('resources', tbl => {
      tbl.increments('resource_id');

      tbl.string('resource_name')
        .notNullable()
        .unique()
        .index();

      tbl.string('resource_descr');

    })

    .createTable('projects', tbl => {
      tbl.increments('project_id');

      tbl.string('project_name')
        .notNullable()
        .index();

      tbl.string('project_descr');

      tbl.integer('completed')
        .notNullable()
        .defaultTo(0);
    })

    .createTable('res_proj', tbl => {
      tbl.primary(['res_id', 'proj_id'])

      tbl.integer('res_id')
        .notNullable()
        .unsigned()
        .references('resource_id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl.integer('proj_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })

    .createTable('tasks', tbl => {
      tbl.increments('task_id');

      tbl.string('task_descr')
        .notNullable();

      tbl.string('task_notes');

      tbl.integer('completed')
        .defaultTo(0)
        .notNullable();

      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('res_proj')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
};
