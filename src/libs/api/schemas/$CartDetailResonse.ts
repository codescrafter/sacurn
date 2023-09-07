/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CartDetailResonse = {
    properties: {
        product_list: {
            type: 'array',
            contains: {
                type: 'Product',
            },
        },
        product_amount: {
            type: 'number',
        },
        cost: {
            type: 'number',
        },
        tax: {
            type: 'number',
        },
        tax_ratio: {
            type: 'number',
            format: 'double',
        },
        total_amount: {
            type: 'number',
        },
    },
} as const;
