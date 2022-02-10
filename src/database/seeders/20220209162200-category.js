'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Category', [
      {
        id: 1,
        name: 'Suporte',
        description: 'Suportes, bases e fixadores',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 2,
        name: 'Iluminação',
        description: 'Lâmpadas, luzes e luminárias',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 3,
        name: 'Teclado',
        description: 'Teclados mecânicos e convencionais',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 4,
        name: 'Mouse',
        description: 'Mouse e trackpads',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 5,
        name: 'Headset',
        description: 'Headset, fones e acessórios',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 6,
        name: 'Organizador',
        description: 'Organizadores, caixas e armários',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Category', null, {});
  }
};
