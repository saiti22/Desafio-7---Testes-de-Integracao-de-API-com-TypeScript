import * as request from 'supertest';
import jest from 'jest'

describe('Int - Aluno Suite', () => {
  it('##GET /aluno/teste', async () => {
    const result = await request('http://localhost:8080')
      .get('/aluno/teste')
    expect(result.status).toBe(200);
  })
});