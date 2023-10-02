/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Group = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        name: {
            type: 'string',
            isRequired: true,
            maxLength: 150,
        },
        permissions: {
            type: 'array',
            contains: {
                type: 'number',
            },
        },
    },
} as const;
