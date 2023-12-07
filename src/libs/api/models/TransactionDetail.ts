/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionDetailStatusEnum } from './TransactionDetailStatusEnum';

export type TransactionDetail = {
    readonly id: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    total_amount?: number | null;
    status?: TransactionDetailStatusEnum;
    pay_at?: string | null;
    deadline?: string | null;
    pay_bank_name?: string | null;
    pay_bank_code?: string | null;
    pay_bank_account?: string | null;
    pay_bank_account_image?: string | null;
    pay_bank_date?: string | null;
    twid_record?: number | null;
};

