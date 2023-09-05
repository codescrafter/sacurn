/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cart } from '../models/Cart';
import type { CartDetail } from '../models/CartDetail';
import type { Order } from '../models/Order';
import type { OrderBuy } from '../models/OrderBuy';
import type { OrderSell } from '../models/OrderSell';
import type { PaginatedCartList } from '../models/PaginatedCartList';
import type { PaginatedOperationRecordList } from '../models/PaginatedOperationRecordList';
import type { PaginatedOrderList } from '../models/PaginatedOrderList';
import type { PaginatedTransactionRecordList } from '../models/PaginatedTransactionRecordList';
import type { PatchedCart } from '../models/PatchedCart';
import type { PayCallback } from '../models/PayCallback';
import type { TransactionDetail } from '../models/TransactionDetail';
import type { TransactionRecord } from '../models/TransactionRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TradeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * status_code
     *
     * 409: 庫存數量小於下單數量
     * @param page A page number within the paginated result set.
     * @returns PaginatedCartList
     * @throws ApiError
     */
    public tradeCartList(
        page?: number,
    ): CancelablePromise<PaginatedCartList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/cart/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * status_code
     *
     * 409: 庫存數量小於下單數量
     * @param requestBody
     * @returns Cart
     * @throws ApiError
     */
    public tradeCartCreate(
        requestBody: Cart,
    ): CancelablePromise<Cart> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/cart/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * status_code
     *
     * 409: 庫存數量小於下單數量
     * @param id
     * @param requestBody
     * @returns Cart
     * @throws ApiError
     */
    public tradeCartPartialUpdate(
        id: number,
        requestBody?: PatchedCart,
    ): CancelablePromise<Cart> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/trade/cart/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * status_code
     *
     * 409: 庫存數量小於下單數量
     * @param id
     * @returns void
     * @throws ApiError
     */
    public tradeCartDestroy(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/trade/cart/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public tradeCartDetailCreate(
        requestBody?: CartDetail,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/cart_detail/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedOrderList
     * @throws ApiError
     */
    public tradeGoodsList(
        page?: number,
    ): CancelablePromise<PaginatedOrderList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/goods/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Order
     * @throws ApiError
     */
    public tradeGoodsCreate(
        requestBody: Order,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/goods/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param carbonCreditId 碳權pk
     * @returns Order
     * @throws ApiError
     */
    public tradeListCarbonOrderRetrieve(
        carbonCreditId?: string,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/list_carbon_order/',
            query: {
                'carbon_credit_id': carbonCreditId,
            },
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedOperationRecordList
     * @throws ApiError
     */
    public tradeOperationRecordList(
        page?: number,
    ): CancelablePromise<PaginatedOperationRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/operation_record/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public tradeOrderBuyRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/order_buy/',
        });
    }

    /**
     * @param requestBody
     * @returns TransactionDetail
     * @throws ApiError
     */
    public tradeOrderBuyCreate(
        requestBody?: OrderBuy,
    ): CancelablePromise<TransactionDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/order_buy/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param carbonCreditId 碳權pk
     * @param desc 排序方式: false(default), true
     * @param page A page number within the paginated result set.
     * @param sortby 排序依據: price(default)
     * @returns PaginatedOrderList
     * @throws ApiError
     */
    public tradeOrderSellList(
        carbonCreditId?: string,
        desc?: string,
        page?: number,
        sortby?: string,
    ): CancelablePromise<PaginatedOrderList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/order_sell/',
            query: {
                'carbon_credit_id': carbonCreditId,
                'desc': desc,
                'page': page,
                'sortby': sortby,
            },
        });
    }

    /**
     * sell=1
     * @param requestBody
     * @returns Order
     * @throws ApiError
     */
    public tradeOrderSellCreate(
        requestBody: OrderSell,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/order_sell/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public tradeOrderSellDestroy(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/trade/order_sell/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public tradePayCallbackCreate(
        requestBody: PayCallback,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/pay_callback/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedTransactionRecordList
     * @throws ApiError
     */
    public tradeTransactionRecordList(
        page?: number,
    ): CancelablePromise<PaginatedTransactionRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/transaction_record/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns TransactionRecord
     * @throws ApiError
     */
    public tradeTransactionRecordCreate(
        requestBody: TransactionRecord,
    ): CancelablePromise<TransactionRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/transaction_record/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
