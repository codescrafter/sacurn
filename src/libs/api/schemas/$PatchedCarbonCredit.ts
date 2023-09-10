/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PatchedCarbonCredit = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
        },
        max_price: {
            type: 'string',
            isReadOnly: true,
        },
        min_price: {
            type: 'string',
            isReadOnly: true,
        },
        location: {
            type: 'string',
            isReadOnly: true,
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
            format: 'uri',
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
        serial_number: {
            type: 'string',
            maxLength: 50,
        },
        rating: {
            type: 'string',
            isNullable: true,
            maxLength: 8,
        },
        co_benefit: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        standard: {
            type: 'string',
            isNullable: true,
            maxLength: 128,
        },
        type: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        carbon_credit_location: {
            type: 'number',
            isNullable: true,
        },
        company: {
            type: 'number',
        },
    },
} as const;
