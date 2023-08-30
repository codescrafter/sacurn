/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OperationRecord = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        product_name: {
            type: 'string',
            isNullable: true,
            maxLength: 128,
        },
        price: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        quantity: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        action: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        note: {
            type: 'string',
            isNullable: true,
            maxLength: 128,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'date-time',
        },
        user: {
            type: 'number',
            isNullable: true,
        },
        carbon_credit: {
            type: 'number',
            isNullable: true,
        },
        cart: {
            type: 'number',
            isNullable: true,
        },
        sell_order: {
            type: 'number',
            isNullable: true,
        },
        buy_order: {
            type: 'number',
            isNullable: true,
        },
        transaction: {
            type: 'number',
            isNullable: true,
        },
    },
} as const;
