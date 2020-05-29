import Sequelize, { Model } from 'sequelize';

class Vehicle extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        brand: Sequelize.STRING,
        model: Sequelize.STRING,
        year_fab: Sequelize.STRING,
        year_mod: Sequelize.STRING,
        doors: Sequelize.STRING,
        transmission: Sequelize.STRING,
        fuel: Sequelize.STRING,
        mileage: Sequelize.STRING,
        value: Sequelize.STRING,
        value_per: Sequelize.STRING,
        short_description: Sequelize.STRING,
        slug: Sequelize.STRING,
        description: Sequelize.TEXT,
        optionals: Sequelize.TEXT,
        thumbimage_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'vehicles',
      }
    );

    this.addHook('beforeSave', async vehicle => {
      if (vehicle.brand && vehicle.model && vehicle.year_fab) {
        let itemsSlug = `${vehicle.brand.toLowerCase()} ${vehicle.model.toLowerCase()} ${vehicle.year_fab.toLowerCase()} ${vehicle.year_mod.toLowerCase()}`
        vehicle.slug = itemsSlug.replace(/\W+/g, '-');
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.ThumbImage, { foreignKey: 'thumbimage_id', as: 'thumbimage' });
  }
}

export default Vehicle;
