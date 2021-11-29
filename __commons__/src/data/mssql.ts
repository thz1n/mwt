import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PSW = process.env.DB_PSW;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = parseInt(`${process.env.DB_PORT}`);

//const VSPORT = parseInt(`${process.env.VS_PORT}`);


const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PSW}`, {
  host: `${DB_HOST}`,
  dialect: 'mssql',
  port: DB_PORT,
  logging: false,
  define: {
    freezeTableName: true,
    timestamps: false
  },
  dialectOptions: {
    requestTimeout: 30000,
    encrypt: true
  }
});

  export default sequelize;