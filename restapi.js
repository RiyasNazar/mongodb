var http = require('http');
http.createServer( (req, res) => {
    let str = "Riyas";
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('Hello World!');
    var body = "";
    var temp;
    var map =new Array();
    if(req.method == "POST"){
      req.on("data", function (chunk) {
        console.log(chunk);
          body += chunk;
          temp = body.split("&")
          for(let i=0;i<(temp.length-1);i++){
            let temp1=temp[i].split("=");
            map.push(temp1[1]);
          }

          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "firstDb"
          });
          
          con.connect(function(err) {
            if (err) throw err;
            con.query("insert into demo values(\""+map[0]+"\",\""+map[1]+"\")", function (err, result, fields) {
              if (err) throw err;
              //console.log(result);
            });
            console.log("Connected!");
          });

      });
      req.on("end", function(){
          res.writeHead(200, { "Content-Type": "text/html" });
      });
    }
res.end();
}).listen(3000);