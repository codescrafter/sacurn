/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Order = {
    readonly id: number;
    readonly remaining_quantity: string;
    readonly company_code: string;
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
    pkcs1?: string | null;
    b64Cert?: string | null;
    twid_resp?: Record<string, any> | null;
    company?: number | null;
    cart?: number | null;
    carbon_credit: number;
};

