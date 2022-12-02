const Mongoose = require("mongoose");

const localDB = `mongodb+srv://TicTacToe:tictactoe@cluster0.gyllot9.mongodb.net/TTTDB`;

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
