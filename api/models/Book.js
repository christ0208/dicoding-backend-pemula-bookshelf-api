import sequelize from 'sequelize';
import db from './Model';

const { DataTypes, Model } = sequelize;

class Book extends Model {}

Book.init({
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  author: {
    type: DataTypes.STRING,
  },
  summary: {
    type: DataTypes.STRING,
  },
  publisher: {
    type: DataTypes.STRING,
  },
  pageCount: {
    type: DataTypes.INTEGER,
  },
  readPage: {
    type: DataTypes.INTEGER,
  },
  finished: {
    type: DataTypes.BOOLEAN,
  },
  reading: {
    type: DataTypes.BOOLEAN,
  },
  insertedAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
}, {
  sequelize: db,
  modelName: 'Book',
  tableName: 'book',
  timestamps: false,
});

export default Book;
