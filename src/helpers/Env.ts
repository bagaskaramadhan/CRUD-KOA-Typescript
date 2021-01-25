import { config } from 'dotenv'

config()
export const ENVConfig = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    NAME: process.env.DB_DATABASE,
    PORT: process.env.PORT
}
// const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env
// console.log({ DB_HOST, DB_USER, DB_PASS, DB_DATABASE })