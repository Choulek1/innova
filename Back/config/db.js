const mongoose = require("mongoose");
const db_connection = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.xaaxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,

      }
    )
    .then(() => {
      console.log("data_base connected");
    })
    .catch(() => {
      console.log("error bch tetarcheg");
    });
};
module.exports = db_connection;