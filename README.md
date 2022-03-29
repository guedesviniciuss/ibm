# 💻  Teste IBM
> Esse API é responsavel por realizar operações de CRUD de uma biblioteca

## 🎯 Objetivos Funcionais
<ol>
    <li> Como usuário gostaria adicionar livros no meu microseviço; Os livros devem conter: SBN, Nome, Breve Descrição e Autor e Estoque; </li>
    <li> Como usuário gostaria de ver a listagem (apenas os nomes) de livros que eu tenho em estoque de forma paginada; </li>
    <li> Como usuário gostaria de ver todos os detalhes de um livro específico;</li>
    <li> Como usuário gostaria atualizar dados de um livro. SBN não pode ser alterado;</li>
    <li> Como usuário gostaria de excluir um livro; </li>
</ol>

## 🎯 Objetivos Não Funcionais
<ol>
    <li>Você deve utilizar o framework Express</li>
    <li>Deve utilzar algum banco de dados (pode ser banco em memória como H2 ou SQLite, porém fique à vontade em utilizar outro banco);</li>
    <li>Para teste utilize o Jest</li>
    <li>Sinta-se livre a utilizar algum outras libs</li>
    <li>Nice to Have: Apresentar o projeto rodando em docker</li>
    <li>Realize commits (git) constantes de acordo coma progressão das atividades</li>
</ol>

## 🏆 Objetivos Concluídos

### Requisitos funcionais
- [x] Como usuário gostaria adicionar livros no meu microseviço; Os livros devem conter: SBN, Nome, Breve Descrição e Autor e Estoque;
- [x] Como usuário gostaria de ver a listagem (apenas os nomes) de livros que eu tenho em estoque de forma paginada;
- [x] Como usuário gostaria de ver todos os detalhes de um livro específico;
- [x] Como usuário gostaria atualizar dados de um livro. SBN não pode ser alterado;
- [x] Como usuário gostaria de excluir um livro;
-
### Requisitos não funcionais

- [x] Você deve utilizar o framework Express
- [x] Deve utilzar algum banco de dados (pode ser banco em memória como H2 ou SQLite, porém fique à vontade em utilizar outro banco);
- [x] Para teste utilize o Jest
- [x] Sinta-se livre a utilizar algum outras libs
- [x] Nice to Have: Apresentar o projeto rodando em docker
- [x] Realize commits (git) constantes de acordo coma progressão das atividades

## Pré-requisitos

Antes de começar a instalação, você precisa instalar alguns pré requisitos:

#### [Node.js](https://nodejs.org/en/)

Adicione o repositório NodeSource.

```sh
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
```

Instale o Node.js

```sh
sudo apt install -y nodejs
```

#### [Postgresql](https://www.postgresql.org/)

Create the file repository configuration:

```sh
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

Importe a chave de assinatura do repositório:

```sh
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

Atualize as listas de pacotes:

```sh
sudo apt-get update
```

Instale a versão mais recente do PostgreSQL.

```sh
sudo apt-get -y install postgresql
```

## Instalação

Após a instalação de todos os pré-requisitos, instale o projeto rodandos os comandos:

```sh
npm install
```

Para testar a instalação, basta iniciar a API com o seguinte comando:

```sh
npm run jest
```

Para executar a aplicação na sua máquina, execute os comandos:

```sh
npm run dev
```



## 🆙 Subir aplicação (docker-compose)

```sh
docker-compose up
```

## 💻 Exemplos de uso

A api foi desenvolvida com a arquitetura REST, dessa maneira as possuem recursos únicos que atendem a somente uma finalidade. Para utilizar o unico recurso desenvolvido por essa api, basta enviar uma requisição do tipo query, com os seguintes dados:

### Create book

``POST {uri}/bookss``

````
{
  "sbn": "1234",
  "name": "Código limpo",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  "author": "Robert C. Martin",
  "stock": 1
}
````

### Update book

``POST {uri}/books/:id``

exemplo de uso:

http://localhost:3000/book/95d78c81-a6ec-4bc8-b381-f7c6dfca1269

Corpo da requisição:

````
{
  "name": "Código sujo",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
}
````

### Delete book

``DELETE {uri}/books/:id``

exemplo de uso:

http://localhost:3000/book/95d78c81-a6ec-4bc8-b381-f7c6dfca1269

### List books

``GET {uri}/books/:id``

exemplo de uso:

http://localhost:3000/book/95d78c81-a6ec-4bc8-b381-f7c6dfca1269


### Find an specific book

``GET {uri}/books/:id``

exemplo de uso:

http://localhost:3000/book/95d78c81-a6ec-4bc8-b381-f7c6dfca1269



