/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TransactionRecord = {
    readonly id: number;
    readonly order_no: string;
    readonly name: string;
    readonly action_cht: string;
    readonly price: string;
    readonly quantity: string;
    readonly total_money: string;
    readonly status: string;
    action: number;
    carbon_credit: number;
    trader: number;
    order: number;
    transaction_detail: string;
    transaction_group?: number | null;
};

