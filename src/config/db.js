const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexão com MongoDB Atlas bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo em caso de falha
  }
};

module.exports = connectDB;
