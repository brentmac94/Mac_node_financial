/**
 * Customer.js
 *
 * @description :: Customer contact information stored here
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    street_address: {
      type: 'string',
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    email: {
      type: 'string',
    },

    zip: {
      type: 'string'
    },

    home_phone: {
      type: 'string'
    },

    cell_phone: {
      type: 'string'
    },

    stocks: {
      collection: 'stock',
      via: 'owner'
    },

    investments: {
      collection: 'investment',
      via: 'owner'
    },

portfolioVal: {
  type: 'string'
},

  }
};

