/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MemberPointRecord = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        status: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        tran_uuid: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            isNullable: true,
            format: 'date-time',
        },
        amount: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        point: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        company: {
            type: 'number',
            isRequired: true,
        },
        transaction: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
