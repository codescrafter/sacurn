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
                type: 'TransactionDetailStatusEnum',
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
        pay_bank_name: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        pay_bank_code: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        pay_bank_account: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        pay_bank_account_image: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        pay_bank_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        twid_record: {
            type: 'number',
            isNullable: true,
        },
    },
} as const;
