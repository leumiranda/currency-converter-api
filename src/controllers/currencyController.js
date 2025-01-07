const { fetchExchangeRate } = require('../services/currencyService');

const convertCurrency = async (req, res) => {
  try {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
      return res.status(400).json({ error: 'Parâmetros ausentes. Informe "from", "to" e "amount".' });
    }

    const rate = await fetchExchangeRate(from, to);
    const convertedAmount = (amount * rate).toFixed(2);

    res.json({ from, to, amount, convertedAmount });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao converter moeda.' });
  }
};

module.exports = { convertCurrency };
