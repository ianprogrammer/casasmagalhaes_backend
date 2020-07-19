import dotenv from 'dotenv'
dotenv.config()
export const DB_CONFIG = {
  type: process.env.DB_type,
  host: process.env.DB_host,
  port: +process.env.DB_port,
  username: process.env.DB_username,
  password: process.env.DB_password,
  database: process.env.DB_database,
}

export const APP_CONFIG = {
  port : process.env.API_PORT || 8000,
}