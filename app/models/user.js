import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class User extends Model {}

User.init({
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.database.sync();
