import request from 'supertest'
import {describe, expect} from '@jest/globals'

describe('Int - Aluno Suite', () => {
  it('##GET /aluno', async () => {
    const result = await request('http://localhost:8080')
      .get('/aluno')
    expect(result.status).toBe(200);
  })

  it('##POST /aluno', async () => {
    const result = await request('http://localhost:8080')
      .post('/aluno')
      .send({
        "nome": "Teste",
        "cpf": "12345678900"
      })
    expect(result.status).toBe(200)
    expect(result.headers['content-type']).toMatch(/json/)
  })

  it('Deverá retornar um erro ao tentar adicionar usuário sem cpf', async () => {
    const result = await request('http://localhost:8080')
      .post('/aluno')
      .send({
        "nome": "Sem cpf"
      })
      expect(result.text).toContain("Entrada inválida")
  })

  it('Deverá retornar um erro ao tentar adicionar usuário sem nome', async () => {
    const result = await request('http://localhost:8080')
      .post('/aluno')
      .send({
        "cpf": "12345678900"
      })
      expect(result.text).toContain("Entrada inválida")
  })
});