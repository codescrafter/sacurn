/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedOrderList = {
    properties: {
        count: {
            type: 'number',
        },
        next: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        previous: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        results: {
            type: 'array',
            contains: {
                type: 'Order',
            },
        },
    },
} as const;
