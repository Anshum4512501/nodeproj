// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'testuser',
//   host: 'localhost',
//   database: 'testdb',
//   password: 'testuser',
//   port: 5432,
// })
// const createUser = (request, response) => {
//     const {  email,password } = request.body
  
//     pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [ email,password], (error, results) => {
//       if (error) {
//         throw error
//       }
      
//       //response.status(201).send(`User added with ID: ${result.insertId}`)
//     })
//   }

//   module.exports.createUsers = createUser;
let People = require('./configdb/postgresconnection');
let Sequelize = require('sequelize');
const sequelize = new Sequelize('testdb', 'testuser', 'testuser', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 19,
    min: 0,
    idle: 10000
  }
});
sequelize.authenticate().then(function(){
  console.log()
  return People.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });
  
}).catch((err)=>{
  console.log(err);
})

module.exports =sequelize;
