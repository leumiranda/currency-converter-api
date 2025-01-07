# 🌍 API de Conversão de Moedas

> **Simples, poderosa e confiável!** Uma API para conversão de moedas em tempo real usando uma API externa para taxas de câmbio. 🚀

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**: Para criar o backend.
- **Express**: Framework para gerenciar rotas e requisições.
- **Axios**: Para consumir a API externa de taxas de câmbio.
- **MongoDB Atlas**: Para armazenar os dados no banco de dados.
- **Mongoose**: ODM para conectar ao MongoDB.
- **Insomnia**: Para testar a API (ou use o navegador!).

---

## 🌟 Como Configurar o Projeto Localmente

### 1️⃣ Pré-Requisitos
- Node.js instalado ([Baixe aqui](https://nodejs.org/)).
- Conta no MongoDB Atlas ([Cadastre-se aqui](https://www.mongodb.com/atlas)).

### 2️⃣ Variáveis de Ambiente
Crie um arquivo **`.env`** na raiz do projeto e adicione:
```
env
PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/currencyDB?retryWrites=true&w=majority
EXCHANGE_API_KEY=CHAVE_DA_API_EXTERNA
    MONGO_URI: String de conexão gerada no MongoDB Atlas.
    EXCHANGE_API_KEY: Chave da API externa para obter as taxas de câmbio.
```

3️⃣ Instale as Dependências

No terminal, execute:

npm install

4️⃣ Inicie o Servidor

Inicie o servidor localmente:

npm start

O servidor será iniciado em http://localhost:3000.
🚀 Como Usar a API
Endpoint: GET /api/currency/convert

    Parâmetros de Query:
        from: Moeda de origem (Exemplo: USD).
        to: Moeda de destino (Exemplo: BRL).
        amount: Quantia a ser convertida (Exemplo: 100).

Exemplo de Requisição:

GET /api/currency/convert?from=USD&to=BRL&amount=100

Exemplo de Resposta:

{
  "from": "USD",
  "to": "BRL",
  "amount": "100",
  "convertedAmount": "611.00"
}

Você pode testar no Insomnia ou diretamente no navegador!
🌟 Contribuição

Contribuições são bem-vindas! Faça um fork e envie seu PR.

Leia a documentação em inglês aqui 👉 [README - EN](./README-en.md).
