/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $User = {
    properties: {
        pk: {
            type: 'number',
            isRequired: true,
        },
        username: {
            type: 'string',
            isRequired: true,
        },
        email: {
            type: 'string',
            isRequired: true,
            format: 'email',
        },
        first_name: {
            type: 'string',
            isRequired: true,
        },
        last_name: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
