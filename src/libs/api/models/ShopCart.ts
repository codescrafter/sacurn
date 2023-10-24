/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status1d2Enum } from './Status1d2Enum';

export type ShopCart = {
    readonly id: number;
    readonly name: string;
    readonly image: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    quantity?: number | null;
    status?: Status1d2Enum;
    company: number;
    shop_product: number;
};

