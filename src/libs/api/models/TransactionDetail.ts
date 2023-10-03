/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status1d2Enum } from './Status1d2Enum';

export type TransactionDetail = {
    readonly id: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    total_amount?: number | null;
    status?: Status1d2Enum;
    pay_at?: string | null;
    deadline?: string | null;
};

