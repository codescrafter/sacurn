/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PatchedShopCart = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
        },
        name: {
            type: 'string',
            isReadOnly: true,
        },
        image: {
            type: 'string',
            isReadOnly: true,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
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
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        status: {
            type: 'all-of',
            contains: [{
                type: 'Status1d2Enum',
            }],
        },
        company: {
            type: 'number',
        },
        shop_product: {
            type: 'number',
        },
    },
} as const;
