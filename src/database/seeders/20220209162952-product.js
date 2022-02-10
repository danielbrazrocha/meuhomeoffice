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
     await queryInterface.bulkInsert('Product', [
      {
        id: 1,
        category_id: 1,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Suporte para monitor com porta Smartphone',
        description: 'Suporte para monitor e notebook prime que tem design estrategicamente pensado tanto para apoiar os equipamentos, quanto para a organização de outros acessórios. Além de ter tamanho perfeito para deixar teclado ou outros objetos na parte de baixo, tem regulagem de altura e espaços para acomodação de material. O suporte tem um local perfeito para smartphone, posicionando-o de uma forma que é possível utilizar o aparelho no local onde está situado.',
        image: "/assets/products/002 - Suporte Monitor.jpg",
        SKU: '1111',
        price: 52.79,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 2,
        category_id: 2,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Ringlight LED 16 cm + Tripé',
        description: 'Anel de Luz LED de 16 centímetros, desenvolvido para reuniões, e pessoas que buscam uma ótima maneira de iluminar com perfeição.',
        image: "/assets/products/004 - Ringlight.jpg",
        SKU: '2222',
        price: 20.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 3,
        category_id: 1,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Suporte Dobrável para Notebook',
        description: 'Com regulagem de altura, que permite até seis diferentes ajustes, você manterá seu notebook em um ângulo de visualização confortável, evitando dores recorrentes de má postura.',
        image: "/assets/products/005 - Suporte de Notebook.jpg",
        SKU: '3333',
        price: 30.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 4,
        category_id: 1,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Suporte para Headset',
        description: 'Suporte de fone de ouvido extensível simples estilo preto para fone de ouvido de laptop.',
        image: "/assets/products/006 - Suporte Headset.jpg",
        SKU: '4444',
        price: 56.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 5,
        category_id: 4,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Mouse Bluetooth',
        description: 'Mouse Sem Fio recarregável que pode ser usado em computadores que não possui portas USB, Funcionamento através de Bluetooth. Mas para aqueles que possui USB e não possui Bluetooth também acompanha um adaptador USB para uso dele em moto Wireless.',
        image: "/assets/products/008 - Mouse Bluetooth.jpg",
        SKU: '5555',
        price: 80.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 6,
        category_id: 5,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Headset Bluetooth',
        description: 'Escute música ou assista vídeos por muito mais tempo e sem precisar de fios. São 15h de reprodução e, se começar a ficar sem energia, uma carga de 15 minutos manterá a música tocando por mais 3 horas.',
        image: "/assets/products/009 - Fone de Ouvido Bluetooth 2.jpg",
        SKU: '6666',
        price: 134.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 7,
        category_id: 6,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Porta Lápis Organizador',
        description: 'Porta lápis/clips/lembrete turquesa waleu indicado para uso em escritórios, epedições,escolas,uso doméstico. ideal para organizar clips, lápis e lembretes.',
        image: "/assets/products/010 - Porta Lápis Organizador.jpg",
        SKU: '7777',
        price: 59.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 8,
        category_id: 6,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Organizador de Cabos e Fios',
        description: 'Ampla aplicação: estes clipes de cabo podem ajudar a gerenciar seus cabos de carregamento, cabos USB, cabos de alimentação, carregadores de celular e assim por diante.',
        image: "/assets/products/012 - Organizador de Cabos.jpg",
        SKU: '8888',
        price: 59.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 9,
        category_id: 1,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Suporte para monitor com prateleira',
        description: 'Suporte para monitor e notebook prime que tem design estrategicamente pensado tanto para apoiar os equipamentos, quanto para a organização de outros acessórios. Além de ter tamanho perfeito para deixar teclado ou outros objetos na parte de baixo, tem regulagem de altura e espaços para acomodação de material. O suporte tem um local perfeito para smartphone, posicionando-o de uma forma que é possível utilizar o aparelho no local onde está situado.',
        image: "/assets/products/014 - Suporte Monitor.jpg",
        SKU: '9999',
        price: 89.59,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 10,
        category_id: 2,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Ringlight LED 16 cm + Tripé',
        description: 'Anel de Luz LED de 16 centímetros, desenvolvido para reuniões, e pessoas que buscam uma ótima maneira de iluminar com perfeição.',
        image: "/assets/products/016 - Ringlight.png",
        SKU: '101010',
        price: 17.49,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 11,
        category_id: 1,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Suporte para Notebook',
        description: 'Com regulagem de altura, que permite até seis diferentes ajustes, você manterá seu notebook em um ângulo de visualização confortável, evitando dores recorrentes de má postura.',
        image: "/assets/products/017 - Suporte Notebook.jpg",
        SKU: '111111',
        price: 38.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 12,
        category_id: 3,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Teclado Bluetooth',
        description: 'ESTILO PORTÁTIL Leve este teclado Bluetooth leve e compacto a qualquer lugar de sua casa. Digite onde quiser, em qualquer computador, telefone ou tablet compatível.',
        image: "/assets/products/019 - Teclado Bluetooth 2.png",
        SKU: '121212',
        price: 178.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        id: 13,
        category_id: 4,
        // discount_id: "",
        // inventory_id: 1,
        name: 'Mouse Bluetooth',
        description: 'Mouse Sem Fio recarregável que pode ser usado em computadores que não possui portas USB, Funcionamento através de Bluetooth. Mas para aqueles que possui USB e não possui Bluetooth também acompanha um adaptador USB para uso dele em moto Wireless.',
        image: "/assets/products/020 - Mouse Bluetooth 2.jpg",
        SKU: '131313',
        price: 78.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Product', null, {});
  }
};
