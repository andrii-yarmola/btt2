
exports.up = function(knex, Promise) {
  return knex.schema.createTable('requests', function(table) {
    table.increments();
    table.string('type').notNullable();
    table.string('name').notNullable();
    table.string('phone');
    table.string('time');
    table.string('date');
    table.string('email');
    table.string('message');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests');
};
