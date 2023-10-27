/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status923Enum } from './Status923Enum';

export type ShopProduct = {
    readonly id: number;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    name: string;
    image?: string | null;
    desc?: string | null;
    price?: number | null;
    quantity?: number | null;
    published_at?: string | null;
    status?: Status923Enum;
    company: number;
};

