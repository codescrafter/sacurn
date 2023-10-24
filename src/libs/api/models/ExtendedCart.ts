/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status1d2Enum } from './Status1d2Enum';

export type ExtendedCart = {
    readonly id: number;
    readonly name: string;
    readonly carbon_tag: string;
    readonly image: string;
    readonly company_code: string;
    readonly remaining_quantity: string;
    order_deleted?: number;
    price: number;
    quantity: number;
    status?: Status1d2Enum;
    readonly created_at: string;
    deleted_at?: string | null;
    company?: number | null;
    order: number;
};

