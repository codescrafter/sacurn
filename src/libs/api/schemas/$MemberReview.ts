/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MemberReview = {
    properties: {
        id: {
            type: 'number',
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
        action: {
            type: 'all-of',
            contains: [{
                type: 'ActionEnum',
            }],
            isRequired: true,
        },
        status: {
            type: 'all-of',
            contains: [{
                type: 'Status1d2Enum',
            }],
        },
        pass_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        company: {
            type: 'number',
            isRequired: true,
        },
        twid_record: {
            type: 'number',
            isNullable: true,
        },
    },
} as const;
