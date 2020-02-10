import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

// tem que adicionar todos os models aqui
const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => {
        try {
          model.associate(this.connection.models);
        } catch (e) {
          console.log('n tem');
        }
      });
  }
}

export default new Database();
