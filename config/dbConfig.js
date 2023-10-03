const { Sequelize } = require('sequelize');
require('dotenv').config();
const dialect = process.env.DIALECT
const host = process.env.HOST

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD, {
        dialect,
        host
    }
)

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to Database')
    } catch (error) {
        console.log('Database Error '+error);
    }
};

module.exports = { sequelize, connectDB };
