/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaginatedPlanRecordList = {
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
                type: 'PlanRecord',
            },
        },
    },
} as const;
