/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UserDetails = {
    description: `User model w/o password`,
    properties: {
        pk: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        username: {
            type: 'string',
            description: `Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.`,
            isRequired: true,
            maxLength: 150,
            pattern: '^[\\w.@+-]+$',
        },
        email: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'email',
        },
        first_name: {
            type: 'string',
            maxLength: 150,
        },
        last_name: {
            type: 'string',
            maxLength: 150,
        },
    },
} as const;
