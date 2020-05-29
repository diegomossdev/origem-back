import Sequelize, { Model } from 'sequelize';

import urlBase from '../../config/urlBase';

class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${urlBase}/files/${this.path}`;
          },
        },
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Vehicle, { foreignKey: 'vehicle_id', as: 'vehicle' });
  }
}

export default File;
