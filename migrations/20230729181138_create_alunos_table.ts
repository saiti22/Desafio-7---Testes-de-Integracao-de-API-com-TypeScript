/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex: any) {
  return knex.schema.createTable('aluno', (table: any) => {
    table.bigIncrements('id').primary();
    table.string('nome');
    table.integer('cpf');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: any) {
  return knex.schema.dropTable('aluno');
};
