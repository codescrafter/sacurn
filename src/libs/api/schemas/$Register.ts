/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Register = {
    properties: {
        username: {
            type: 'string',
            maxLength: 150,
            minLength: 1,
        },
        email: {
            type: 'string',
            format: 'email',
        },
        password1: {
            type: 'string',
            isRequired: true,
        },
        password2: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
