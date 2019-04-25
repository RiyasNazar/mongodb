const http = require('http');

const books = [{
"bookid": 1,
"bookname": "March"
},{
"bookid": 2,
"bookname": "March"
}];

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booksdb');

const db = mongoose.conection;
mongoose.connect('mongodb://localhost:27017/booksdb',{ useNewUrlParser: true } )
        .then(() => console.log("mongoDB connected"))
        .catch(err => console.log(err));

http.createServer( (req, response) => {
  if(req.method == "GET") {
    const db = mongoose.conection;
   mongoose.connect('mongodb://localhost:27017/booksdb', (err,db)  => {
    const dbo = db.db('booksdb');
    dbo.collection("books").find({}).toArray((err, result) => {
      connect().then(() => {
        console.log("Data receiving");
        db.close();
      })
      .catch(err => {
        console.error('error occurred');
      });
      for(let i of books) {
       let temp = JSON.stringify(i);
       console.log(temp);
       response.write(temp);
      }
      response.end();
    });
   });
  }; 


  if(req.method == "POST") {
   req.on("data", (chunk) => {
     let body = ""+chunk;
     let bookid = [];
     console.log(chunk);
     temp = body.split("&");
      for(let i = 0; i < (temp.length-1); i++) {
         let temp1 = temp[i].split("=");
         bookid[i] = temp1[1];
      }
      books.push ({
        "bookid": bookid[0],
        "bookname": bookid[1]
      });
   });
   response.end();
  } 

  if(req.method == "PUT") {
    req.on("data", (chunk) => {
      let body = "" +chunk;
      let id = [];
      let bookid = [];
      console.log(chunk);
      temp = body.split("&");
        for(let i = 0; i < (temp.length-1); i++) {
          let temp1 = temp[i].split("=");
          bookid[i] = temp1[1];
        }
        books.forEach((book,i) => {
          if (books[i].id === id) {
            books[i].name = name
          }
        })
    })
    response.end();
  };

  if(req.method == "DELETE") {
    req.on("data", (chunk) => {
      let body = "" +chunk;
      let id = [];
      let bookid = [];
      console.log(chunk);
        temp = body.split("&");
        for(let i = 0; i < (temp.length-1); i++) {
          let temp1 = temp[i].split("=");
          bookid[i] = temp1[1];
        }
        books.forEach((book,i) => {
          if (books[i].id === id) {
            books.splice(i,1);
          }
        });
    });    
    response.end();
  };
}).listen(4000);
