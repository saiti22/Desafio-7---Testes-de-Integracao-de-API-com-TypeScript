import knex from "knex";
import knexConfig from "../config/knex";

let conn: any;

function conectar(busca: String) {
  if (conn) {
    return conn;
  }

  conn = knex(knexConfig);
  return conn;
}

export default conectar;
