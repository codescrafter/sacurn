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
        remaining_quantity: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        company_code: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        carbon_name: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        carbon_about: {
            type: 'string',
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
        traded_quantity: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        company: {
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
        twid_record: {
            type: 'number',
            isNullable: true,
        },
    },
} as const;
