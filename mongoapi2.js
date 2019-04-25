const http = require('http');

const MongoClient = require('mongodb').MongoClient
, Server = require('mongodb').Server;
const url = "mongodb://localhost:27017/playersdbs";
let db;

MongoClient.connect(url, (err, database) => {
  if(err) throw err
  db = database.db('playersdbs');
});

http.createServer( (req, response) => {
  if(req.method == "GET") {
    db.collection("playerslist").find({}).toArray( (err, result) => {
      if (err) throw err;
      response.write(result);
    });
    response.end();
  };

  if(req.method == "POST") {
    req.on("data", (chunk) => {
      let body = ""+chunk;
      let playersdetail = [];
      console.log(chunk);
      temp = body.split("&");
      for(let i = 0; i < (temp.length-1); i++) {
        let temp1 = temp[i].split("=");
        playersdetail[i] = temp1[1];
      } 
      const myobj = { id: playersdetail[0], name: playersdetail[1], runs: playersdetail[2] };
      db.collection("playerslist").insertOne(myobj, (err, res) => {
        if (err) throw err;
        console.log("1 document inserted");
      });
      response.write();
    });
    response.end();
  }

  if(req.method == "PUT") {
    req.on("data", (chunk) => {
      let body = "" +chunk;
      let id = [];
      let playersdetail = [];
      console.log(chunk);
      temp = body.split("&");
      for(let i = 0; i < (temp.length-1); i++) {
        let temp1 = temp[i].split("=");
        playersdetail[i] = temp1[1];
      }
      playersdetail.forEach((players,i) => {
        if (players[i].id === id) {
          players[i].name = name,
          players[i].runs = runs
        }
      }); 
      const myobj = { id: playersdetail[0] }; 
      const myobj1 = { name: playersdetail[1], runs: playersdetail[2] } 
      db.collection("playerslist").updateOne(myobj,myobj1, (err, res) => {
        if (err) throw err;
        console.log("1 document inserted");
      });
    });
    response.end();
  }; 

  if(req.method == "DELETE") {
    req.on("data", (chunk) => {
      let body = "" +chunk;
      let id = [];
      let playersdetail = [];
      console.log(chunk);
      temp = body.split("&");
      for(let i = 0; i < (temp.length-1); i++) {
        let temp1 = temp[i].split("=");
        playersdetail[i] = temp1[1];
      }
      playersdetail.forEach((players,i) => {
        if (playersdetail[i].id === id) {
          playersdetail.splice(i,1);
        }
      });
      const myobj = { id: playersdetail[0], name: playersdetail[1], runs: playersdetail[2] };
      db.collection("playerslist").deleteOne(myobj, (err, res) => {
        if (err) throw err;
        console.log("1 document inserted");
      });
    }); 
    response.end();
  };

}).listen(6000); 

