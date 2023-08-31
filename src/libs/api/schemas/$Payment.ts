/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Payment = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        amount: {
            type: 'number',
            isRequired: true,
            format: 'double',
        },
        deadline: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
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
        company: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
