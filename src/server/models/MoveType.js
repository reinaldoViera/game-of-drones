// type MoveType {
//     id: ID!
//     name: String!
//     kills: MoveType!
// }

import Sequelize from 'sequelize'

export default (sequalize = new Sequelize(), DataTypes) => {
    const MoveType = sequalize.define('MoveType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    MoveType.associate = (models) => {
        MoveType.belongsTo(models.MoveType, {
            as: 'kills'
        })
        MoveType.belongsToMany(models.Configuration, {
            through: 'ConfigurationMoveType'
        })
    };

    return MoveType;
};