
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: "resource_1", resource_descr: 'This is the resource description for resource 1' },

        { resource_name: "resource_2", resource_descr: 'This is the resource description for resource 2' },

        { resource_name: "resource_3", resource_descr: 'This is the resource description for resource 3' },

        { resource_name: "resource_4", resource_descr: 'This is the resource description for resource 4' },

        { resource_name: "resource_5", resource_descr: 'This is the resource description for resource 5' },

      ]);
    });
};
