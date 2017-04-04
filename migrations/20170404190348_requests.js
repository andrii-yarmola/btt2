
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
    table.string('filePath1');
    table.string('filePath2');
    table.string('filePath3');
    table.string('fileName1');
    table.string('fileName2');
    table.string('fileName3');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('requests');
};
