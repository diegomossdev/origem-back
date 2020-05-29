module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year_fab: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      year_mod: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      doors: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transmission: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fuel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mileage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      value_per: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      short_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      optionals: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      thumbimage_id: {
        type: Sequelize.INTEGER,
        references: { model: 'thumb_images', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('vehicles');
  }
};
