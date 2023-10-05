/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransactionRecord = {
    readonly id: number;
    readonly order_no: string;
    readonly name: string;
    readonly action: string;
    readonly price: string;
    readonly quantity: string;
    readonly total_amount: string;
    readonly status: string;
    readonly created_at: string;
    carbon_credit: number;
    company: number;
    order: number;
    transaction_detail: string;
    transaction_group?: number | null;
};

