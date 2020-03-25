exports.up = function (knex) {
  knex.schema.createTable("incidents", function (table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.string("value").notNullable();

    table.string("ong_id").notNullable();
    table.foreign("ong_id").refences("id").inTable("ongs");
  });
};

exports.down = function (knex) {
  knex.schema.dropTable("incidents");
};
