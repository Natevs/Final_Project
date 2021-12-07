const path = require('path');
//During the test the env variable is set to test
const env = process.env.NODE_ENV || 'developement';

var config = {
       development: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 80,
              dbURL: 'mongodb://localhost/crmlite ',
              secret: "thisistheencryptioncode"
              //Mongo db uri mongodb+srv://VanSchyndel
       },
       test: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 80,
              dbURL: 'mongodb://localhost/test ',
              secret: "thisistheencryptioncode"    
       },
       production: {
              rootPath: path.normalize(__dirname + '/..'),
              app: { name: ' CRMLite' },
              port: 8080,
              dbURL: 'mongodb+srv://VanSchyndel:<password>@cluster0.lkeht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ',
              secret: "thisistheencryptioncode"
              /*mongodb+srv://VanSchyndel:<password>@cluster0.lkeht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority*/
       }
};
module.exports = config[env];

/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://VanSchyndel:<password>@cluster0.lkeht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/