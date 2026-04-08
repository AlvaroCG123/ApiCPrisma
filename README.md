# LAST API

API Node.js com Express e Prisma para gerenciar convidados.

## Requisitos

- Node.js 20+
- NPM 10+
- MySQL/MariaDB rodando localmente

## Passo a passo (depois de clonar)

1. Clone o repositório e entre na pasta:

```bash
git clone <URL_DO_REPOSITORIO>
cd last
```

2. Instale as dependencias:

```bash
npm install
```

3. Configure o banco de dados MySQL/MariaDB:

- Crie um banco chamado `last` (ou ajuste o nome no codigo).
- Edite as credenciais em `lib/prisma.ts`:
  - `host`
  - `user`
  - `password`
  - `database`
  - `port`

4. (Opcional, recomendado) Crie um arquivo `.env` a partir de `.env.example` para usar comandos do Prisma:

```bash
copy .env.example .env
```

5. Gere o client do Prisma:

```bash
npx prisma generate
```

6. Rode as migracoes (se necessario):

```bash
npx prisma migrate dev --name init
```

7. Inicie o servidor em modo desenvolvimento:

```bash
npm run dev
```

## Endpoints

- `GET /` retorna uma mensagem de status.
- `GET /teste` lista os convidados da tabela `convidado`.

## Scripts

- `npm run dev`: inicia o servidor com `tsx watch`.

## Estrutura resumida

- `lib/src/server.ts`: inicializacao do Express e rotas.
- `lib/prisma.ts`: conexao do Prisma com adapter MariaDB.
- `prisma/schema.prisma`: schema e modelos.
- `generated/prisma`: client gerado (nao versionado).
