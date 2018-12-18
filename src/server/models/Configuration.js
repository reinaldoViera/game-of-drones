import Sequelize from 'sequelize'

export default (sequalize = new Sequelize(), DataTypes) => {
    // type Configuration {
    //     id: ID!
    //     name: String!
    //     move_types: [MoveType!]!
    // }
    const Configuration = sequalize.define('Configuration', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    Configuration.associate = (models) => {
        Configuration.belongsToMany(models.MoveType, {
            through: 'ConfigurationMoveType'
        });
    };
    return Configuration;
};