const Pool = require('pg').Pool
const pool = new Pool({
  user: 'testuser',
  host: 'localhost',
  database: 'testdb',
  password: 'testuser',
  port: 5432,
})
const createUser = (request, response) => {
    const {  email,password } = request.body
  
    pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [ email,password], (error, results) => {
      if (error) {
        throw error
      }
      
      //response.status(201).send(`User added with ID: ${result.insertId}`)
    })
  }

  module.exports.createUsers = createUser;