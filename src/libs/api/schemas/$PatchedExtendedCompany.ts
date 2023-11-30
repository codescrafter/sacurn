/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PatchedExtendedCompany = {
    properties: {
        id: {
            type: 'number',
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
        name: {
            type: 'string',
            maxLength: 45,
        },
        code: {
            type: 'string',
            maxLength: 50,
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
            format: 'date',
        },
        phone: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
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
        representative_id_card_issue_location: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        representative_id_card_issue_times: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
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
        terms_of_service_confirm: {
            type: 'boolean',
        },
        terms_of_service_confirm_at: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        status: {
            type: 'all-of',
            contains: [{
                type: 'ReissueEnum',
            }],
        },
        contact_person_name: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        contact_person_position: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        contact_person_email: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        contact_person_phone: {
            type: 'string',
            isNullable: true,
            maxLength: 45,
        },
        address: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        contact_address: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
        registration_document: {
            type: 'string',
            format: 'uri',
        },
    },
} as const;
