/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status02bEnum } from './Status02bEnum';

export type PatchedExtendedCompany = {
    readonly id?: number;
    readonly created_at?: string | null;
    readonly updated_at?: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    name?: string;
    code?: string;
    registration_number?: string | null;
    representative?: string | null;
    capital?: number | null;
    founding_date?: string | null;
    address?: Record<string, any> | null;
    phone?: string | null;
    contact_address?: Record<string, any> | null;
    representative_country?: string | null;
    representative_country_type?: string | null;
    representative_id_card_number?: string | null;
    representative_id_card_issue_date?: string | null;
    representative_id_card_issue_location?: string | null;
    representative_id_card_issue_times?: string | null;
    representative_birthday?: string | null;
    representative_id_card_front?: string | null;
    representative_id_card_back?: string | null;
    financial_institution_type?: string | null;
    financial_institution_name?: string | null;
    financial_institution_branch_name?: string | null;
    account_name?: string | null;
    account_number?: string | null;
    account_image?: string | null;
    terms_of_service_confirm?: boolean;
    terms_of_service_confirm_at?: string | null;
    status?: Status02bEnum;
    registration_document?: string;
};

