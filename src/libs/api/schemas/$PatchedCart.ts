/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PatchedCart = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
        },
        name: {
            type: 'string',
            isReadOnly: true,
        },
        carbon_tag: {
            type: 'string',
            isReadOnly: true,
        },
        image: {
            type: 'string',
            isReadOnly: true,
        },
        company_code: {
            type: 'string',
            isReadOnly: true,
        },
        remaining_quantity: {
            type: 'string',
            isReadOnly: true,
        },
        order_deleted: {
            type: 'string',
            isReadOnly: true,
        },
        price: {
            type: 'number',
            format: 'double',
        },
        quantity: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        status: {
            type: 'all-of',
            contains: [{
                type: 'Status1d2Enum',
            }],
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        company: {
            type: 'number',
            isNullable: true,
        },
        order: {
            type: 'number',
        },
    },
} as const;
