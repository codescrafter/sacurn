/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShopProduct = {
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
        name: {
            type: 'string',
            isRequired: true,
            maxLength: 45,
        },
        desc: {
            type: 'string',
            isNullable: true,
            maxLength: 512,
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
        pubished_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
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
    },
} as const;
