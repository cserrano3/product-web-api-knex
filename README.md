
# Product REST API
Uma api REST em Express com as operações básicas de CRUD.





## Tech Stack

**Server:** Node, Express, Express-Validator

**Banco de Dados:** PostgreSQL

## Requisitos

Para executar o projeto localmente, é necessário ter o [PostgreSQL](https://www.postgresql.org/) e o [Node JS](https://nodejs.org/en) instalados no computador.

No arquivo `src/configs/database.js`, substituia os valores da  string de conexão `postgres://local_user:local_user_password/database_name` com os dados do seu banco de dados local.


## Instalação e execução local

Descompacte a pasta com o código do projeto.


```bash
 cd product_web_api
 npm install
 npm run dev
```

## Referência da API

#### Lista todos os produtos

```http
  GET /api/v1/product
```


#### Obtém um produto

```http
  GET /api/v1/product/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `int` | **Required**. Id do produto para ser obtido |

#### Deleta um produto

```http
  DELETE /api/v1/product/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `int` | **Required**. Id do produto para ser deletado |

#### Cria um produto

```http
  POST /api/v1/product
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `description`      | `string` | **Required**. Texto descrevendo o produto, ou nome |
| `brand`      | `string` | **Required**. Marca do produto |
| `value`      | `float` | **Required**. Preço do produto |


#### Edita um produto

```http
  PUT /api/v1/product/:productId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productId`      | `int` | **Required**. Id do produto para ser editado |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `description`      | `string` | **Required**. Texto descrevendo o produto, ou nome |
| `brand`      | `string` | **Required**. Marca do produto |
| `value`      | `float` | **Required**. Preço do produto |

