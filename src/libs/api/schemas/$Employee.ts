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
        phone: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        user: {
            type: 'number',
            isRequired: true,
        },
        company: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
