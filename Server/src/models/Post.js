const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Post', {
        PostId: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
                },
    }, {
        timestamps: false
    });
};


