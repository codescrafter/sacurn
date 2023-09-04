/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Order = {
    readonly id: number;
    readonly remaining_quantity: string;
    readonly company_code: string;
    quantity?: number | null;
    min_order_quantity?: number | null;
    buy?: number | null;
    sell?: number | null;
    price?: number | null;
    readonly created_at: string;
    deleted?: number;
    deleted_at?: string | null;
    traded_quantity?: number;
    status?: number;
    trader?: number | null;
    cart?: number | null;
    carbon_credit: number;
};

