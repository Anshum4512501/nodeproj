const Sequelize = require('sequelize');
const sequelize = new Sequelize('testdb', 'testuser', 'testuser', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 19,
    min: 0,
    idle: 10000
  }
});
module.exports=sequelize;
     
  //sequelize.close();
// let obj = {};
// obj.fname="Anshu";
// obj.lname="Mishra";
// obj.email="anshum45@gmail.com";
// obj.phonenumber="7007975402";
// obj.password="Anshum45";
// console.log(obj);
// var dbparams=function (req,res){
    // obj.fname = req.body.fname;
    // obj.lname = req.body.lname;
    // obj.email = req.body.email;
    // obj.phonenumber = req.body.phonenumber;
    // obj.password = req.body.password;
    
// }
//module.exports.dbparams = dbparams;

// People.sync({force: true}).then(function () {
//   return People.create({
//     firstName: obj.fname,
//     lastName: obj.lname,
//     password: obj.password,
//     email: obj.email,
//     phone: obj.phonenumber
    
//   })
// });
