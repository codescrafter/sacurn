/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Inventory = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        status: {
            type: 'string',
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
        vintage: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        serial_number: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        location: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        ratio: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        available_sale_quantity: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        quantity: {
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
        carbon_credit: {
            type: 'number',
            isRequired: true,
        },
        company: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
