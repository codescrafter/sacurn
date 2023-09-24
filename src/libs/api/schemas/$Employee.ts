/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Employee = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        username: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        email: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        status_cht: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        last_name: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        group_name: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
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
        position: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        tel: {
            type: 'string',
            isNullable: true,
            maxLength: 12,
        },
        tel_extension: {
            type: 'string',
            isNullable: true,
            maxLength: 12,
        },
        phone: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        status: {
            type: 'number',
            maximum: 2147483647,
            minimum: -2147483648,
        },
        user: {
            type: 'number',
            isRequired: true,
        },
        company: {
            type: 'number',
            isNullable: true,
        },
    },
} as const;
