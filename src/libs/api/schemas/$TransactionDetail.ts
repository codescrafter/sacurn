/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionDetail = {
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
        total_money: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        status: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        pay_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
    },
} as const;
