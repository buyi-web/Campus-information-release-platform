const { Sequelize } = require('sequelize')
// const { sqlLogger } = require('../logger')

const sequelize = new Sequelize('info_release', 'root', 'buyi2210', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
})

module.exports = sequelize
