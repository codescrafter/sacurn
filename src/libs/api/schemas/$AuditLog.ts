/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AuditLog = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        ip: {
            type: 'string',
            isNullable: true,
            maxLength: 20,
        },
        authority: {
            type: 'string',
            isNullable: true,
            maxLength: 1,
        },
        method: {
            type: 'string',
            isNullable: true,
            maxLength: 8,
        },
        path: {
            type: 'string',
            isNullable: true,
            maxLength: 256,
        },
        request: {
            type: 'string',
            isNullable: true,
        },
        status_code: {
            type: 'string',
            isNullable: true,
            maxLength: 8,
        },
        response: {
            type: 'string',
            isNullable: true,
        },
        response_ms: {
            type: 'string',
            isNullable: true,
            maxLength: 64,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            isNullable: true,
            format: 'date-time',
        },
        user: {
            type: 'number',
            isNullable: true,
        },
    },
} as const;
