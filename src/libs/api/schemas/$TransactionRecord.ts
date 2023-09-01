/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionRecord = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        action: {
            type: 'number',
            isRequired: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        carbon_credit: {
            type: 'number',
            isRequired: true,
        },
        trader: {
            type: 'number',
            isRequired: true,
        },
        order: {
            type: 'number',
            isRequired: true,
        },
        transaction_detail: {
            type: 'string',
            isRequired: true,
            format: 'uuid',
        },
        transaction_group: {
            type: 'number',
            isNullable: true,
        },
    },
} as const;
