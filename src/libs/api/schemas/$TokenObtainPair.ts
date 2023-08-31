/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TokenObtainPair = {
    properties: {
        username: {
            type: 'string',
            isRequired: true,
        },
        password: {
            type: 'string',
            isRequired: true,
        },
        access: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        refresh: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
    },
} as const;
