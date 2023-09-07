/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Cart = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        name: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        carbon_tag: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        image: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        company_code: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        remaining_quantity: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        price: {
            type: 'number',
            isRequired: true,
            format: 'double',
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
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'date-time',
        },
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        trader: {
            type: 'number',
            isNullable: true,
        },
        order: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
