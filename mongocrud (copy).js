const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/playerslistdb');

const db = mongoose.conection;
mongoose.connect('mongodb://localhost:27017/playerslistdb',{ useNewUrlParser: true } )
        .then(() => console.log("mongoDB connected"))
        .catch(err => console.log(err));


app.get('/players', (req, res) => {
    const db = mongoose.conection;
        mongoose.connect('mongodb://localhost:27017/playerslistdb', (err,db)  => {
        const dbo = db.db('playerslistdb');
        dbo.collection("playerslist").find({}).toArray((err, result) => {
            connect().then(() => {
              console.log("Data receiving");
              db.close();
            })
          .catch(err => {
            console.error('error occurred');
          });
          return res.send(result);
        });
    })
});

app.post('/players', (req, res) => {
    const id = req.body.id,
          name = req.body.name,
          runs = req.body.runs,
          myobj = { idnumber: id, name: name, runs: runs };
    mongoose.connect('mongodb://localhost:27017/playerslistdb'), (err, db) => {
        dbo.collection("playerslist").insertOne(myobj, (err, result) => {
          connect().then(() => {
            console.log("1 document inserted");
            db.close();
          })
          .catch(err => {
            console.error('error occurred');
          });
        return res.send(result);
        });
    }    
});

app.put('/player/:id', (req, res) => {
    const id = req.body.id,
          name = req.body.name,
          runs = req.body.runs;
    mongoose.connect('mongodb://localhost:27017/playerslistdb'), (err, db) => {
        const dbo = db.db('playersdb'),
              myobj = { idnumber: id },
              myobj1 = { $set: { name: name, runs: runs } };
        dbo.collection("playerslist").updateOne(myobj, myobj1, function (err, result) {
            connect().then(() => {
                console.log("1 document updated");
                db.close();
            })
            .catch(err => {
                console.error('error occurred');
            });
            return res.send(result);
        });
    }
});

app.delete('/players', (req, res) => {
    const id = req.body.id;
    mongoose.connect('mongodb://localhost:27017/playerslistdb', function (err, db) {
        const dbo = db.db('playersdb'),
              myobj = { idnumber: id };
        dbo.collection("playerslist").deleteOne(myobj, function (err, result) {
            connect().then(() => {
                console.log("1 document deleted");
                db.close();
            })
            .catch(err => {
                    console.error('error occurred');
            });
            return res.send(result);
        });

    })
});

app.listen(6000, () => {
    console.log("server is listening on port 6000");
});