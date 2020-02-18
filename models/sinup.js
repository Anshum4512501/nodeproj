let Sequelize = require('sequelize')
let sequelize=require('../configdb/postgresconnection')
module.exports = sequelize.define('resolver', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});
