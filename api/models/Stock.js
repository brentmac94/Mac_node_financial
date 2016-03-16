/**
 * Stock.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

    price: {
      type: 'float'
    },

    symbol: {
      type: 'string',
      required: true
    },

    name : {
      type: 'string',
      required: true
    },

    number_of_shares: {
      type: 'float',
      required: true
    },

    date_purchased: {
      type: 'string'
    },


    owner: {
      model: 'customer',
      via: 'owner'
    }

  }

};
