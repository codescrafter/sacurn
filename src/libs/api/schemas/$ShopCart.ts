/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShopCart = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            isNullable: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            isNullable: true,
            format: 'date-time',
        },
        deleted: {
            type: 'boolean',
        },
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        quantity: {
            type: 'number',
            isRequired: true,
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
            isRequired: true,
        },
        shop_product: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
