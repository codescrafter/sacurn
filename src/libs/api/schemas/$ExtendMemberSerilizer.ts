/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ExtendMemberSerilizer = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        identity: {
            type: 'array',
            contains: {
                properties: {
                },
            },
        },
        upgrade: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        deleted: {
            type: 'boolean',
        },
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        name: {
            type: 'string',
            isRequired: true,
            maxLength: 45,
        },
        image: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        level: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        registration_fee: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        annual_renewal_fee: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        duration: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        recommend: {
            type: 'string',
            isRequired: true,
            maxLength: 45,
        },
        point: {
            type: 'string',
            isRequired: true,
            maxLength: 45,
        },
        point_multiplier: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        buy_cost: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        sell_cost: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        trade_day_limit: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        trade_month_limit: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        user_access_limit: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        project_estimate: {
            type: 'string',
            isRequired: true,
            maxLength: 45,
        },
        e_news: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        market_trade: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        upcoming_release: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        rebate_program: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
    },
} as const;
