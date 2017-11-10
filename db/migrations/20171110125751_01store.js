
exports.up = function(knex, Promise) {
  return knex.schema.createTable('store', (table)=>{
    table.increments();
    table.string('store_name');
    table.string('description');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('store');
};
