/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Order = {
    readonly id: number;
    readonly remaining_quantity: string;
    readonly company_code: string;
    readonly carbon_name: string;
    readonly carbon_about: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    quantity?: number | null;
    min_order_quantity?: number | null;
    buy?: number | null;
    sell?: number | null;
    price?: number | null;
    traded_quantity?: number;
    company?: number | null;
    cart?: number | null;
    carbon_credit: number;
    twid_record?: number | null;
};

