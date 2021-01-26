import { config } from 'dotenv'

config()
export const ENVConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    NAME: process.env.DB_DATABASE
}