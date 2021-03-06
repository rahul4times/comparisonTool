
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', (table)=>{
    table.increments();
    table.string('name');
    table.string('description');
    table.integer('store_id')
    .notNullable()
    .references('id')
    .inTable('store')
    .onDelete('CASCADE')
    .index();
    table.decimal('price');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
