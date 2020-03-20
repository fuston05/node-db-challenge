
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('res_proj').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('res_proj').insert([
        { res_id: 1, proj_id: 1 },
        { res_id: 2, proj_id: 1 },
        { res_id: 3, proj_id: 1 },
        { res_id: 4, proj_id: 1 },
        { res_id: 5, proj_id: 1 },
        { res_id: 1, proj_id: 2 },
        { res_id: 2, proj_id: 2 },
        { res_id: 3, proj_id: 2 },
        { res_id: 4, proj_id: 2 },
        { res_id: 5, proj_id: 2 }
      ]);
    });
};
