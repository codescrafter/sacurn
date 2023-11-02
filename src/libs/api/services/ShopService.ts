/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartDetailResponse } from '../models/CartDetailResponse';
import type { PaginatedShopCartList } from '../models/PaginatedShopCartList';
import type { PaginatedShopProductList } from '../models/PaginatedShopProductList';
import type { PaginatedShopTransactionList } from '../models/PaginatedShopTransactionList';
import type { PatchedShopCart } from '../models/PatchedShopCart';
import type { PayCallback } from '../models/PayCallback';
import type { ShopCart } from '../models/ShopCart';
import type { ShopCartRequest } from '../models/ShopCartRequest';
import type { ShopOrderBuy } from '../models/ShopOrderBuy';
import type { ShopProduct } from '../models/ShopProduct';
import type { ShopProductRequest } from '../models/ShopProductRequest';
import type { ShopTransaction } from '../models/ShopTransaction';

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
     * 0: 待結帳
     *
     * 1：已結帳
     *
     * 2：刪除
     * @param requestBody
     * @returns ShopCart
     * @throws ApiError
     */
    public shopCartCreate(
        requestBody?: ShopCartRequest,
    ): CancelablePromise<ShopCart> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shop/cart/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ShopCart
     * @throws ApiError
     */
    public shopCartPartialUpdate(
        id: number,
        requestBody?: PatchedShopCart,
    ): CancelablePromise<ShopCart> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/shop/cart/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public shopCartDestroy(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/shop/cart/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public shopCartBulkDeleteCreate(
        requestBody?: ShopOrderBuy,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shop/cart/bulk_delete/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns CartDetailResponse
     * @throws ApiError
     */
    public shopCartDetailCreate(
        requestBody?: ShopOrderBuy,
    ): CancelablePromise<CartDetailResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shop/cart_detail/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedShopCartList
     * @throws ApiError
     */
    public shopOrderList(
        page?: number,
    ): CancelablePromise<PaginatedShopCartList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/shop/order/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ShopTransaction
     * @throws ApiError
     */
    public shopOrderCreate(
        requestBody?: ShopOrderBuy,
    ): CancelablePromise<ShopTransaction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shop/order/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public shopPayCallbackCreate(
        requestBody: PayCallback,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shop/pay_callback/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedShopProductList
     * @throws ApiError
     */
    public shopProductList(
        page?: number,
    ): CancelablePromise<PaginatedShopProductList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/shop/product/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns ShopProduct
     * @throws ApiError
     */
    public shopProductCreate(
        requestBody?: ShopProductRequest,
    ): CancelablePromise<ShopProduct> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/shop/product/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedShopTransactionList
     * @throws ApiError
     */
    public shopTransactionList(
        page?: number,
    ): CancelablePromise<PaginatedShopTransactionList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/shop/transaction/',
            query: {
                'page': page,
            },
        });
    }

}
