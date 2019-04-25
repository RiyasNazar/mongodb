const http = require('http'),
      bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/playersdb";        

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('playersdb');
  var myobj = { idnumber: 01 , name: "virat", runs: 1000 };
  dbo.collection("playerslist").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
      });
});

http.createServer( (req, response) => {
  if(req.method == "GET") {
      for(let i of playersdb) {
       let temp = JSON.stringify(i);
       console.log(temp);
       response.write(temp);
       response.write(dbo.getCollection('playerslist').find({}));
      }
      response.end();
  }
}).listen(6000);

