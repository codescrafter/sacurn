/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SellEnum } from './SellEnum';

export type OrderSell = {
    carbon_credit: number;
    price: string;
    quantity: number;
    sell: SellEnum;
    min_order_quantity: number;
    pkcs1?: string;
    b64Cert?: string;
};

