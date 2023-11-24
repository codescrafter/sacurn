/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PasswordChange = {
    properties: {
        new_password1: {
            type: 'string',
            isRequired: true,
            maxLength: 128,
        },
        new_password2: {
            type: 'string',
            isRequired: true,
            maxLength: 128,
        },
    },
} as const;
