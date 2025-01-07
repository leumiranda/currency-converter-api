const axios = require('axios');

const fetchExchangeRate = async (from, to) => {
  const apiKey = process.env.EXCHANGE_API_KEY;
  const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

  const response = await axios.get(url);
  const rate = response.data.rates[to];

  if (!rate) throw new Error('Taxa de câmbio não encontrada.');

  return rate;
};

module.exports = { fetchExchangeRate };
