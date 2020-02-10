import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://${process.env.HOST}:${process.env.PORT}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );
  }
}

export default File;
