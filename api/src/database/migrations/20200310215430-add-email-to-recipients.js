'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('recipients', 'email', {
			type: Sequelize.STRING,
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL'
		});
	},

	down: queryInterface => {
		return queryInterface.removeColumn('recipients', 'email');
	}
};
