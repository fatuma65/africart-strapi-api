'use strict';

/**
 * payment controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::payment.payment');

// @ts-ignore
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
    async createPaymentIntent(ctx) {
        const { amount, currency } = ctx.request.body;

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency,
                automatic_payment_methods: { enabled: true }
            });
            return ctx.send({ clientSecret: paymentIntent.client_secret });
        }
        catch (err) {
            return ctx.badRequest(err.message);
        }
    }
};
