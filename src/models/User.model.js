import { DataTypes } from 'sequelize';
import client from '../util/db.js';

export const User = client.define(
  'User',
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'user_id',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activationToken: {
      type: DataTypes.STRING,
      field: 'activation_token',
    },
    resetToken: {
      type: DataTypes.UUID,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
    underscored: true,
  },
);
