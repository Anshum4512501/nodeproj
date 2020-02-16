let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser')
let postgres = require('postgres');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let db = require('./db.js');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let members= {
    "user1" : {
       "name" : "mahesh",
       "password" : "password1",
       "profession" : "teacher",
       "id": 1
    },
    "user2" : {
       "name" : "suresh",
       "password" : "password2",
       "profession" : "librarian",
       "id": 2
    },
    "user3" : {
       "name" : "ramesh",
       "password" : "password3",
       "profession" : "clerk",
       "id": 3
    }
 }
//app.set('views', path.join(__dirname, 'views'));

app.use(urlencodedParser);
app.use(express.static(__dirname + '/style'));
//app.use(express.static(__dirname + '/views'));
app.get('/',(req,res)=>{
    //res.sendFile(__dirname+"/view/index.html");
    res.render('index');
})

app.get('/members/:user',(req,res)=>{
     const user= req.params.user;
     console.log(user);
     if(user){
         console.log(user);
        //console.log(members)
         console.log(members.user)
         res.send(JSON.stringify(members.user))
     }
//    let name= req.params('name');
     else{
        res.json(members);
     }
     
})

app.post('/register',function(req,res){
    let email = req.body.email;
    let password = req.body.password;
    db.createUsers(req,res); 
    res.render('register',{email:email,password:password} )
    console.log(req.body);
})
app.listen(2000,(req, res)=>{
    console.log("Server is listening on port 2000");
})
