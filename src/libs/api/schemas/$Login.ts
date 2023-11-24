/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Login = {
    properties: {
        username: {
            type: 'string',
        },
        email: {
            type: 'string',
            format: 'email',
        },
        password: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
