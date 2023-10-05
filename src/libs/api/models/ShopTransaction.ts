/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status1d2Enum } from './Status1d2Enum';

export type ShopTransaction = {
    readonly id: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    total_amount?: number;
    status?: Status1d2Enum;
    company: number;
    shop_order: number;
};

