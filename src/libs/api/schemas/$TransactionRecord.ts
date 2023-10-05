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
        order_no: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        name: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        action: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        price: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        quantity: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        total_amount: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        status: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        carbon_credit: {
            type: 'number',
            isRequired: true,
        },
        company: {
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
