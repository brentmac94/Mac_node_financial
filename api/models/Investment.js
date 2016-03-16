/**
 * Investment.js
 *
 * @description :: Customer contact information stored here
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {
    category: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },

    gain: {
      type: 'string'
    },

    aquired_value: {
      type: 'string',
      required: true
    },

    aquired_date: {
      type: 'string',
      required: true
    },

    recent_value: {
      type: 'string'
    },

    recent_date: {
      type: 'string'
    },


  owner: {
      model: 'customer',
      via: 'owner'
    }

  }
};

