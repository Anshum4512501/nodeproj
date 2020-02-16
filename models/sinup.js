let sequelize=require('../configdb/postgresconnection.js')
let log = console.log;
log(sequelize);
sequelize().then(() => {
    console.log("Success!");
    var Posts = sequelize.define('posts', {
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      }
    }, {
      freezeTableName: true
    });
  
    Posts.sync({force: true}).then(function () {
      return Posts.create({
        title: 'Getting Started with PostgreSQL and Sequelize',
        content: 'Hello there'
      });
    });
  }).catch((err) => {
    console.log(err);
  });