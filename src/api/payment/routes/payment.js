'use strict';

/**
 * payment router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::payment.payment');

module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/payments/create-payment-intent',
            handler: 'payment.createPaymentIntent',
            config: {
                policies: []
            }
        }
    ]
}
