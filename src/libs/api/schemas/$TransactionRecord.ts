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
        action_cht: {
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
        total_money: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        status: {
            type: 'string',
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
