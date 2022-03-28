require('dotenv/config');

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  entities: [
    process.env.ENTITIES_PATH,
  ],
  migrations: [
    process.env.MIGRATIONS_PATH,
  ],
  cli: {
    migrationsDir: process.env.MIGRATIONS_DIR_PATH,
  },
};
