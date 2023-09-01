/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PlanRecord = {
    properties: {
        id: {
            type: 'number',
            isReadOnly: true,
            isRequired: true,
        },
        deadline: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'date-time',
        },
        company: {
            type: 'number',
            isRequired: true,
        },
        plan: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
