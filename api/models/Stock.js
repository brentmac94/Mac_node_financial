/**
 * Stock.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'sting',
      required: true
    },

    price: {
      type: 'float'
    },

    symbol: {
      type: 'string',
      required: true
    },

    number_of_shares: {
      type: 'float',
      required: true
    },

    date_purchased: {
      type: 'string',
      required: true
    },

    owner: {
      model: 'customer',
      required: true
    }

  }

};

