import knex from "../../service/knex";

const getAll = async () => {
  return await knex().select("*").from("aluno");
};

const store = async (params: any) => {
  try{
    return await knex().insert(params).into("aluno");
  }catch{
    return "Entrada inválida"
  }
  
};

export default {
  getAll,
  store,
};
