import { sql } from './db.js';

// Usuários
sql`
  CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL CHECK (char_length(nome) >= 3),
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email ~* '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
);
`.then(() => {
  console.log('Tabela usuarios criada com sucesso!');
  process.exit(0);
})
.catch((err) => {
    console.error('Erro ao criar tabela usuarios:', err);
    process.exit(1);
  });

// Livros
