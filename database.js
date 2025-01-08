const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://Nidhish_Agarwal:Nidhish64364488@cluster0.tqv0w.mongodb.net/modifying_data"
    )
    .then((data) => {
      console.log("DataBase sucessfully connected", data.connection.host);
    })
    .catch((err) => {
      console.log("Error connecting to Database", err.message);
    });
};

module.exports = connectDatabase;
