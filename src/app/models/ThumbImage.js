import Sequelize, { Model } from 'sequelize';

import urlBase from '../../config/urlBase';

class ThumbImage extends Model {
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
}

export default ThumbImage;
