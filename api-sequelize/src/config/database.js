module.exports = {
  dialect: 'mysql', // or 'postgres' and yarn add pg-hstore or https://sequelize.org/master/manual/dialects.html
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
