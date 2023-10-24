/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CarbonCredit = {
    properties: {
        id: {
            type: 'number',
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
        location: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        carbon_tag: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        images: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        impacts: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        performances: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        project_validator: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        ccs_validator: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        additional_certifications: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        issued_credits_retired: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        project_documents: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
        },
        name: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        about: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        image: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        video: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        price: {
            type: 'number',
            isNullable: true,
            format: 'double',
        },
        quantity: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        vintage: {
            type: 'string',
            isNullable: true,
            format: 'date',
        },
        serial_number: {
            type: 'string',
            maxLength: 50,
        },
        carbon_rating: {
            type: 'string',
            isNullable: true,
            maxLength: 8,
        },
        co_benefit: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        certification_from: {
            type: 'string',
            isNullable: true,
            maxLength: 128,
        },
        type: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        project_code: {
            type: 'string',
            isNullable: true,
            maxLength: 8,
        },
        available_vintage_start: {
            type: 'string',
            isNullable: true,
            format: 'date',
        },
        available_vintage_end: {
            type: 'string',
            isNullable: true,
            format: 'date',
        },
        hectares: {
            type: 'number',
            isNullable: true,
            maximum: 2147483647,
            minimum: -2147483648,
        },
        developer: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        standard_methodology: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        volume_issues: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        avg_annual_emission_reduction: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        information: {
            type: 'string',
            isNullable: true,
        },
        rating_text: {
            type: 'string',
            isNullable: true,
        },
        forest_text: {
            type: 'string',
            isNullable: true,
        },
        impact_image: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        created_at: {
            type: 'string',
            isReadOnly: true,
            isRequired: true,
            format: 'date-time',
        },
        carbon_credit_location: {
            type: 'number',
            isNullable: true,
        },
        company: {
            type: 'number',
            isRequired: true,
        },
    },
} as const;
