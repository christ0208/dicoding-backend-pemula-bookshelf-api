import Sequelize from 'sequelize';
import database from '../../config/database';

const seq = new Sequelize(database.name, database.username, database.password, {
  host: database.host,
  dialect: database.type,
  operatorsAliases: Sequelize.op,
  pool: {
    min: parseInt(database.poolMin, 10),
    max: parseInt(database.poolMax, 10),
  },
  define: {
    freezeTableName: true,
  },
});

export default seq;
