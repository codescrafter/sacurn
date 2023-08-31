/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $JWT = {
    description: `Serializer for JWT authentication.`,
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
            type: 'UserDetails',
            isRequired: true,
        },
    },
} as const;
