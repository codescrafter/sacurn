/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ShopTransaction = {
    properties: {
        id: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'uuid',
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
        total_amount: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        status: {
            type: 'all-of',
            contains: [{
                type: 'ReissueEnum',
            }],
        },
        company: {
            type: 'number',
            isRequired: true,
        },
        shop_order: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
