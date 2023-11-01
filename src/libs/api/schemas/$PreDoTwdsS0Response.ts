/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PreDoTwdsS0Response = {
    properties: {
        unfinishedPdfs: {
            type: 'array',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
        semiPdfs: {
            type: 'array',
            contains: {
                properties: {
                },
            },
            isRequired: true,
        },
        tbsPdfs: {
            type: 'string',
            isRequired: true,
        },
        timestamp: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;
