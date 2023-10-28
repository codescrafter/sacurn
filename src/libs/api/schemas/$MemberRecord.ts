/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MemberRecord = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        current_member: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        current_member_annual_renewal_fee: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        renewal_deadline_day: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        next_member: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        next_member_annual_renewal_fee: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        loss_card_fee: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        buy_cost: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        sell_cost: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        can_upgrade: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            isNullable: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            isNullable: true,
            format: 'date-time',
        },
        deleted: {
            type: 'boolean',
        },
        deleted_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        start_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        expire_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        renewal: {
            type: 'all-of',
            contains: [{
                type: 'RenewalEnum',
            }],
        },
        renewal_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        renewal_complete_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        renewal_expire_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        upgrade: {
            type: 'all-of',
            contains: [{
                type: 'ReissueEnum',
            }],
        },
        upgrade_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        upgrade_complete_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        company: {
            type: 'number',
            isRequired: true,
        },
        member: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
