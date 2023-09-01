/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CarbonCredit = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        max_price: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        min_price: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        name: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        about: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        video: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        image: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
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
        vintage: {
            type: 'string',
            isNullable: true,
            format: 'date',
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'date-time',
        },
        carbon_credit_location: {
            type: 'number',
            isNullable: true,
        },
        company: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
