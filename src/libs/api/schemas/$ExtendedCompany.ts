/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ExtendedCompany = {
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
        deleted: {
            type: 'boolean',
        },
        name: {
            type: 'string',
            isRequired: true,
            maxLength: 45,
        },
        registration_number: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        representative: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        capital: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        founding_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        address: {
            type: 'string',
            isNullable: true,
            maxLength: 256,
        },
        phone: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        contact_address: {
            type: 'string',
            isNullable: true,
            maxLength: 256,
        },
        representative_country: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        representative_country_type: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        representative_id_card_number: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        representative_id_card_issue_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        representative_birthday: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        representative_id_card_front: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        representative_id_card_back: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        financial_institution_type: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        financial_institution_name: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        financial_institution_branch_name: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        account_name: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        account_number: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        account_image: {
            type: 'string',
            isNullable: true,
            format: 'uri',
        },
        registration_document: {
            type: 'string',
            isRequired: true,
            format: 'uri',
        },
    },
} as const;
