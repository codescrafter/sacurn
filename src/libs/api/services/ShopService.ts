/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedShopCartList } from '../models/PaginatedShopCartList';
import type { ShopCart } from '../models/ShopCart';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ShopService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedShopCartList
     * @throws ApiError
     */
    public shopCartList(
        page?: number,
    ): CancelablePromise<PaginatedShopCartList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/shop/cart/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ShopCart
     * @throws ApiError
     */
    public shopCartCreate(
        requestBody: ShopCart,
    ): CancelablePromise<ShopCart> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shop/cart/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
