import { sql } from './db.js';

// Usuários

await sql`
  CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL CHECK (char_length(nome) >= 3),
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email ~* '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
);
`.then(() => {
  console.log('Tabela usuarios criada com sucesso!');
})
.catch((err) => {
    console.error('Erro ao criar tabela usuarios:', err);
    process.exit(1);
  });



// Livros

await sql`
  CREATE TABLE IF NOT EXISTS livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL CHECK (char_length(titulo) >= 3 AND char_length(titulo) <= 100),
    autor VARCHAR(255),
    status VARCHAR(10) NOT NULL CHECK (status IN ('Quero Ler', 'Lendo', 'Lido')),
    avaliacao INT CHECK (avaliacao BETWEEN 1 AND 5),
    data_conclusao TIMESTAMP,
    usuario_id INTEGER REFERENCES usuarios(id) ON DELETE SET NULL,
    CHECK (
        (status = 'Lido' AND (avaliacao IS NULL OR (avaliacao BETWEEN 1 AND 5)))
        OR (status != 'Lido' AND avaliacao IS NULL)
    ),
    CHECK (
        (status = 'Lido' AND data_conclusao IS NOT NULL)
        OR (status != 'Lido' AND data_conclusao IS NULL)
    )
);
`.then(() => {
  console.log('Tabela livros criada com sucesso!');
})
.catch((err) => {
    console.error('Erro ao criar tabela livros:', err);
    process.exit(1);
  });


process.exit(0);