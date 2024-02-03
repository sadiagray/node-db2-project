exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17).notNullable().unique()

    tbl.string('make', 100).notNullable()

    tbl.string('model', 100).notNullable()

    tbl.numeric('mileage').notNullable()

    tbl.string('title', 100)

    tbl.string('transmission', 100)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
