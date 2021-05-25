	
const MongoClient = require("mongodb").MongoClient;

module.exports = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });