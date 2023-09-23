import {Sequelize} from 'sequelize';

const db = new Sequelize('database_app', 'admin', 'admin123',{
    host:'rds-mysql-carlos.czjtyw8jxnkx.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})
export default db;