/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LoginResponse = {
    properties: {
        access: {
            type: 'string',
        },
        refresh: {
            type: 'string',
            isRequired: true,
        },
        user: {
            type: 'User',
            isRequired: true,
        },
        company_id: {
            type: 'number',
        },
        company_status: {
            type: 'number',
        },
    },
} as const;
