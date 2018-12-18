import Sequelize from 'sequelize'

export default (sequalize = new Sequelize(), DataTypes) => {
    // type Round {
    //     id: ID!
    //     winner: Player!
    //     p1_move: Move!
    //     p2_move: Move!
    // }
    const Round = sequalize.define('Round', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    }, {
        freezeTableName: true
    });

    Round.associate = (models) => {
        Round.belongsTo(models.Player, {
            as: 'Winner'
        });
        Round.hasMany(models.Move, {
            as: 'moves'
        });
    };
    return Round;
};