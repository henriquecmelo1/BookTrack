# 📚 API de Gerenciamento de Leitura

API RESTful para controle de livros lidos, em leitura e desejados por usuários. Projeto desenvolvido como parte de um desafio técnico.

## 🚀 Tecnologias Utilizadas

- Node.js
- Fastify
- PostgreSQL
- Dotenv

---

## 📁 Estrutura do Projeto

```bash
📦 backend/
├── 📂 controllers    # Lógica das rotas
├── 📂 data           # Exportação dos dados
├── 📂 database       # Configuração da base de dados 
├── 📂 models         # Modelos 
├── 📂 routes         # Rotas da aplicação
├── 📂 services       # Lógica de negócio
├── .env              # Arquivo para variáveis de ambiente
└── server.js         # Ponto de entrada do servidor
```
---

## 🧠 Regras de Negócio Implementadas

### Usuário
- O nome é obrigatório e deve ter no mínimo 3 caracteres.
- O e-mail é obrigatório, deve ser único e ter um formato válido.

### Livro
- O título é obrigatório, com comprimento entre 3 e 100 caracteres.
- O campo `autor` é opcional.
- O `status` é obrigatório e deve ser um dos seguintes valores: `"Quero Ler"`, `"Lendo"` ou `"Lido"`.
- A `avaliação` é opcional, mas só pode ser registrada se o status for `"Lido"` e deve estar entre 1 e 5.
- A `data_conclusao` é preenchida automaticamente quando o status é alterado para `"Lido"`.
- Cada livro pertence a um único usuário.
- Apenas o dono do livro pode editá-lo ou excluí-lo.
- Livros com status `"Lido"` não podem ser editados, apenas excluídos.

---

### 📌 Funcionalidades

#### Usuários
- ✅ Criar usuário  
- ✅ Listar usuários  
- ✅ Excluir usuário  
- ✅ Exportar lista de usuários em JSON  

#### Livros
- ✅ Adicionar livro
- ✅ Listar livros
- ✅ Editar livro  
- ✅ Excluir livro  
- ✅ Exportar lista de livros em JSON  

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js
- PostgreSQL
- Git

### Instalação

```bash
git clone https://github.com/henriquecmelo1/BookTrack.git
cd BookTrack/backend
npm install
```

### ⚙️ Configuração

**1. Crie a base de dados no PostgreSQL**

Acesse seu PostgreSQL e crie uma base de dados com o nome desejado.

**2. Crie um arquivo `.env`**

Dentro da pasta `backend` do projeto, crie um arquivo chamado `.env` com o seguinte conteúdo:
```bash
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_da_sua_base
```

Substitua:
- `usuario` pelo nome do seu usuário do PostgreSQL (geralmente `postgres`)
- `senha` pela senha configurada no PostgreSQL
- `nome_da_sua_base` pelo nome da base de dados criada no passo anterior


### ▶️ Execução

Com o cursor do terminal posicionado na **pasta `backend`**, execute os seguintes comandos:

Caso ainda não tenha as tabelas criadas no banco, rode o script:

```bash
npm run create
```

Após isso, inicie a aplicação com:
```bash
npm run start
```


---

## 📫 Testes com Postman

Para facilitar os testes da API, você pode usar a collection pública do Postman com todas as rotas prontas:

🔗 [Acessar Collection no Postman](https://www.postman.com/flight-saganist-6679061/booktrack/collection/y6t77h1/booktrack?action=share&creator=34558713)

Essa collection contém exemplos de requisições para:
- 📌 Criar, listar e excluir usuários
- 📘 Adicionar, editar, listar e excluir livros
- 📤 Exportar a lista de livros em JSON

Você pode importar a collection diretamente no seu Postman ou usar via navegador com o botão **"Run in Postman"**.

---

