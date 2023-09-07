/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegistrationResponse = {
    properties: {
        access: {
            type: 'string',
            isRequired: true,
        },
        refresh: {
            type: 'string',
            isRequired: true,
        },
        user: {
            type: 'User',
            isRequired: true,
        },
    },
} as const;
