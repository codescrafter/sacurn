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
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        total_amount: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        status: {
            type: 'all-of',
            contains: [{
                type: 'Status1d2Enum',
            }],
        },
        pay_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        deadline: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
    },
} as const;
