/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PasswordReset = {
    description: `Serializer for requesting a password reset e-mail.`,
    properties: {
        email: {
            type: 'string',
            isRequired: true,
            format: 'email',
        },
    },
} as const;
