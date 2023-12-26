import knex from "../../service/knex";

const getAll = async () => {
  return await knex('aluno').select();
};

const store = async (params: any) => {
  return await knex('aluno').insert(params);
};

export default {
  getAll,
  store,
};
