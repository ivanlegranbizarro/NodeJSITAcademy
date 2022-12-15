import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.Username;
const dbPassword = process.env.Password;
const host = 'localhost';

const sequelize = new Sequelize(`mysql://${dbUser}:${dbPassword}@localhost:3306/jocdedaus`, {
  logging: false,
  host,
  dialect: 'mysql',
});

const dbConnectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default dbConnectMySQL;
