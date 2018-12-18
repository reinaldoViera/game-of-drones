import Sequelize from 'sequelize'

// type Move {
//     id: ID!
//     move_type: MoveType!
//     player: Player!
// }

export default (sequalize = new Sequelize(), DataTypes) => {
    const Move = sequalize.define('Move', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    }, {
        freezeTableName: true
    });

    Move.associate = (models) => {
        Move.belongsTo(models.MoveType)
        Move.belongsTo(models.Player)
    };

    return Move;
};