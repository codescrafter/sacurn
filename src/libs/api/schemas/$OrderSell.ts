/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrderSell = {
    properties: {
        carbon_credit: {
            type: 'number',
            isRequired: true,
        },
        price: {
            type: 'string',
            isRequired: true,
        },
        quantity: {
            type: 'number',
            isRequired: true,
        },
        sell: {
            type: 'SellEnum',
            isRequired: true,
        },
        min_order_quantity: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
