/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WatchList = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        name: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        carbon_tag: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        image: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        max_price: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        min_price: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        vintage: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'date-time',
        },
        carbon_credit: {
            type: 'number',
            isRequired: true,
        },
        company: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
