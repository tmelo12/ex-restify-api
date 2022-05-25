const Sequelize = require('sequelize');

//criação do client conexão
const sequelize = new Sequelize(process.env.NAME_DATABASE, process.env.USER_DATABASE, process.env.PASSWORD_DATABASE, {
    host: process.env.HOST,
    port: process.env.PORT_DATABASE,
    dialect:'postgres',
    define:{
        timestamps: false
    }
})

module.exports = sequelize;