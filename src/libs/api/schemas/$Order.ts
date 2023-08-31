/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Order = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        quantity: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        min_order_quantity: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        buy: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        sell: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        price: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'date-time',
        },
        deleted: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        transaction_volume: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        status: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        trader: {
            type: 'number',
            isNullable: true,
        },
        cart: {
            type: 'number',
            isNullable: true,
        },
        carbon_credit: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
