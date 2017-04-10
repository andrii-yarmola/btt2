
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders', function(table) {
    table.increments();
    table.string('name');
    table.string('amount');
    table.string('status'); // paid, pending, canleled, new, refunded
    table.string('paymentJson', [2048]);
    table.string('paymentId');
    table.string('token');
    table.timestamps(); // date generated and chanched
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
