exports.up = function(knex, Promise) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments().primary();
    tbl.text("VIN");
    tbl.text("make");
    tbl.text("model");
    tbl.integer("mileage");
    tbl.text("transmission");
    tbl.text("titleStatus");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
