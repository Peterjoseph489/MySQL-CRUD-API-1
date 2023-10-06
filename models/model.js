const { sequelize, connectDB } = require('../config/dbConfig')
const { DataTypes } = require('sequelize')


const userModel = sequelize.define('Task', {
    content: {
        type: DataTypes.STRING,
        validate: {
            max: 150
        }
    },
    description: {
        type: DataTypes.TEXT
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true
});



// Syncing my Model to the database so as to create tables for each entry.
(async () => {
    try {
        await sequelize.sync();
        console.log('Database synced successfully');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
})();

module.exports = userModel