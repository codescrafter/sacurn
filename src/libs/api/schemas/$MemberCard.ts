/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MemberCard = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        issue_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        revoke_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        revoke_complete_at: {
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
        company: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
