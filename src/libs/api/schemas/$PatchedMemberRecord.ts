/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PatchedMemberRecord = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
        },
        current_member: {
            type: 'string',
            isReadOnly: true,
        },
        next_member: {
            type: 'string',
            isReadOnly: true,
        },
        buy_cost: {
            type: 'string',
            isReadOnly: true,
        },
        sell_cost: {
            type: 'string',
            isReadOnly: true,
        },
        can_upgrade: {
            type: 'string',
            isReadOnly: true,
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isNullable: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
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
        status: {
            type: 'all-of',
            contains: [{
                type: 'Status923Enum',
            }],
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
        upgrade: {
            type: 'all-of',
            contains: [{
                type: 'UpgradeEnum',
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
        },
        member: {
            type: 'number',
        },
    },
} as const;
