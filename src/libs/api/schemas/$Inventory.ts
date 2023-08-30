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
        quantity: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
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
