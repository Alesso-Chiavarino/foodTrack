import dotenv from 'dotenv'

dotenv.config()

const ENV = {
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || 'development',
    MONGO_URI: process.env.MONGO_URI || '',
}

export default ENV