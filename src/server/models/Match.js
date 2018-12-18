import Sequelize from 'sequelize'

export default (sequalize = new Sequelize(), DataTypes) => {
    // type Match {
    //     id: ID!
    //     player1: Player!
    //     player2: Player!
    //     finished: Boolean!
    //     winner: Player!
    //     configuration: Configuration!
    //     rounds: [Round!]!
    // }
    const Match = sequalize.define('Match', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        finished: DataTypes.BOOLEAN
    }, {
        freezeTableName: true
    });

    Match.associate = (models) => {
        Match.hasMany(models.Round);
        Match.belongsToMany(models.Player, {
            through: 'PlayerMatch'
        });
        Match.belongsTo(models.Player, {
            as: 'Winner'
        });
        Match.belongsTo(models.Configuration);
    };

    return Match;
};