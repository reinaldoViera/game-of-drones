import Sequelize from 'sequelize'

export default (sequalize = new Sequelize(), DataTypes) => {
    // type Player {
    //     id: ID!
    //     name: String!
    //     matchs: [Match!]!
    // }
    const Player = sequalize.define('Player', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    Player.associate = (models) => {
        Player.belongsToMany(models.Match, { through: 'PlayerMatch'})
    };
    return Player;
};