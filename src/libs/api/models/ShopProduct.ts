/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShopProductStatusEnum } from './ShopProductStatusEnum';

export type ShopProduct = {
    readonly id: number;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    name: string;
    desc?: string | null;
    price?: number | null;
    quantity?: number | null;
    published_at?: string | null;
    status?: ShopProductStatusEnum;
    company: number;
};

