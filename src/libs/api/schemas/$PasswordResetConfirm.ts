/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PasswordResetConfirm = {
    description: `Serializer for confirming a password reset attempt.`,
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
        uid: {
            type: 'string',
            isRequired: true,
        },
        token: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
