const mongoose = require("mongoose");
const config = require("./config")

const connect = () => {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        // "mongodb+srv://js17admin:bca7y2roZXuWfmPS@cluster0.yyfu8.mongodb.net/kodemiaStore?retryWrites=true&w=majority",
        // { useNewUrlParser: true }
        // "mongodb+srv://gustengo:reodfk3c@kodemia16.4fl7o.mongodb.net/kodemia17"
        `mongodb+srv://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.baseCollection}?retryWrites=true&w=majority`
      );
  
      const db = mongoose.connection;
  
      db.on("open", () => {
        console.log("Connection successful");
        resolve(mongoose);
      });
  
      db.on("error", (err) => {
        console.error("Connection failed", err);
        reject(err);
      });
    });
  };
  
  module.exports = { connect };