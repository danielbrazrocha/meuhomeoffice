module.exports = {
    development: {
        username: "root",
        password: "root",
        database: "meu_home_office",
        host: "localhost",
        dialect: "mysql",
    },
    production: {
      use_env_variable: 'DATABASE_URL',
      dialect: "mysql",
    //   protocol: 'postgres',
    //   dialectOptions: {
    //     ssl: { // https://github.com/sequelize/sequelize/issues/12083
    //       require: true,
    //       rejectUnauthorized: false,
    //     },
    //   },
    },
  };


// module.exports = {
//     development: {
//       username: "root",
//       password: "root",
//       database: "meu_home_office",
//       host: "localhost",
//       dialect: "mysql",
//     },
//     test: {
//         username: process.env.DB_USER,
//         password: process.env.DB_PWD,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: process.env.DB_DIALECT,
//         logging: true
//     },
//     production: {
//         username: process.env.DB_USER,
//         password: process.env.DB_PWD,
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: process.env.DB_DIALECT
//     }
// };