/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartBulkDelete } from '../models/CartBulkDelete';
import type { CartDetail } from '../models/CartDetail';
import type { CartDetailResonse } from '../models/CartDetailResonse';
import type { CartRequest } from '../models/CartRequest';
import type { ExtendedCart } from '../models/ExtendedCart';
import type { OperationRecordFilter } from '../models/OperationRecordFilter';
import type { Order } from '../models/Order';
import type { OrderBuy } from '../models/OrderBuy';
import type { OrderSell } from '../models/OrderSell';
import type { OrderSellDelete } from '../models/OrderSellDelete';
import type { PaginatedExtendedCartList } from '../models/PaginatedExtendedCartList';
import type { PaginatedOperationRecordList } from '../models/PaginatedOperationRecordList';
import type { PaginatedOrderList } from '../models/PaginatedOrderList';
import type { PaginatedTransactionRecordList } from '../models/PaginatedTransactionRecordList';
import type { PatchedCart } from '../models/PatchedCart';
import type { PayCallback } from '../models/PayCallback';
import type { TotalAmountThrCheck } from '../models/TotalAmountThrCheck';
import type { TotalAmountThrCheckResp } from '../models/TotalAmountThrCheckResp';
import type { TransactionDetail } from '../models/TransactionDetail';
import type { TransactionRecord } from '../models/TransactionRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TradeService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedExtendedCartList
     * @throws ApiError
     */
    public tradeCartList(
        page?: number,
    ): CancelablePromise<PaginatedExtendedCartList> {
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
     *
     * status
     *
     * 0: 待結帳
     *
     * 1：已結帳
     *
     * 2：刪除
     * @param requestBody
     * @returns ExtendedCart
     * @throws ApiError
     */
    public tradeCartCreate(
        requestBody?: CartRequest,
    ): CancelablePromise<ExtendedCart> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/cart/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns ExtendedCart
     * @throws ApiError
     */
    public tradeCartPartialUpdate(
        id: number,
        requestBody?: PatchedCart,
    ): CancelablePromise<ExtendedCart> {
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
     * @returns void
     * @throws ApiError
     */
    public tradeCartBulkDeleteCreate(
        requestBody?: CartBulkDelete,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/cart/bulk_delete/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns TotalAmountThrCheckResp
     * @throws ApiError
     */
    public tradeCartTotalAmountThrCheckCreate(
        requestBody?: TotalAmountThrCheck,
    ): CancelablePromise<TotalAmountThrCheckResp> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/cart/total_amount_thr_check/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns CartDetailResonse
     * @throws ApiError
     */
    public tradeCartDetailCreate(
        requestBody?: CartDetail,
    ): CancelablePromise<CartDetailResonse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/cart_detail/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param carbonCredit 碳權id
     * @param page A page number within the paginated result set.
     * @returns PaginatedOrderList
     * @throws ApiError
     */
    public tradeListCarbonOrderList(
        carbonCredit?: string,
        page?: number,
    ): CancelablePromise<PaginatedOrderList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/list_carbon_order/',
            query: {
                'carbon_credit': carbonCredit,
                'page': page,
            },
        });
    }

    /**
     * @param download 下載csv (download=1會下載）
     * @param keyword 搜尋關鍵字(碳權名稱)
     * @param page A page number within the paginated result set.
     * @param range 期間 ex: 2023-09-01,2023-09-30
     * @param status 狀態 ex: 加入購物車,下單結帳,完成付款
     * @param user 操作者(username)
     * @returns PaginatedOperationRecordList
     * @throws ApiError
     */
    public tradeOperationRecordList(
        download?: string,
        keyword?: string,
        page?: number,
        range?: string,
        status?: string,
        user?: string,
    ): CancelablePromise<PaginatedOperationRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/operation_record/',
            query: {
                'download': download,
                'keyword': keyword,
                'page': page,
                'range': range,
                'status': status,
                'user': user,
            },
        });
    }

    /**
     * @returns OperationRecordFilter
     * @throws ApiError
     */
    public tradeOperationRecordFilterListRetrieve(): CancelablePromise<OperationRecordFilter> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/operation_record_filter_list/',
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
     * @param twid twid_record
     * @param requestBody
     * @returns TransactionDetail
     * @throws ApiError
     */
    public tradeOrderBuyCreate(
        twid: string,
        requestBody?: OrderBuy,
    ): CancelablePromise<TransactionDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/order_buy/',
            query: {
                'twid': twid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param carbonCredit 碳權id
     * @param desc 排序方式: false(default), true
     * @param page A page number within the paginated result set.
     * @param sortBy 排序依據: price(default)
     * @returns PaginatedOrderList
     * @throws ApiError
     */
    public tradeOrderSellList(
        carbonCredit?: string,
        desc?: string,
        page?: number,
        sortBy?: string,
    ): CancelablePromise<PaginatedOrderList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/order_sell/',
            query: {
                'carbon_credit': carbonCredit,
                'desc': desc,
                'page': page,
                'sort_by': sortBy,
            },
        });
    }

    /**
     * sell=1
     * @param requestBody
     * @param twid twid_record
     * @returns Order
     * @throws ApiError
     */
    public tradeOrderSellCreate(
        requestBody: OrderSell,
        twid?: string,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/order_sell/',
            query: {
                'twid': twid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param twid twid_record
     * @param requestBody
     * @returns Order
     * @throws ApiError
     */
    public tradeOrderSellTakeOffCreate(
        twid?: string,
        requestBody?: OrderSellDelete,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/order_sell/take_off/',
            query: {
                'twid': twid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns TransactionDetail
     * @throws ApiError
     */
    public tradePayCallbackCreate(
        requestBody: PayCallback,
    ): CancelablePromise<TransactionDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/pay_callback/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public tradeTransactionCancelCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/transaction_cancel/',
        });
    }

    /**
     * @param action 買單: 1 賣單: 0
     * @param download 下載csv (download=1會下載）
     * @param keyword 搜尋關鍵字(碳權名稱, 訂單號號)
     * @param page A page number within the paginated result set.
     * @param range 期間 ex: 2023-09-01,2023-09-30
     * @param status 狀態: 待付款,完成付款
     * @returns PaginatedTransactionRecordList
     * @throws ApiError
     */
    public tradeTransactionRecordList(
        action?: string,
        download?: string,
        keyword?: string,
        page?: number,
        range?: string,
        status?: string,
    ): CancelablePromise<PaginatedTransactionRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/trade/transaction_record/',
            query: {
                'action': action,
                'download': download,
                'keyword': keyword,
                'page': page,
                'range': range,
                'status': status,
            },
        });
    }

    /**
     * @param requestBody
     * @param action 買單: 1 賣單: 0
     * @param download 下載csv (download=1會下載）
     * @param keyword 搜尋關鍵字(碳權名稱, 訂單號號)
     * @param range 期間 ex: 2023-09-01,2023-09-30
     * @param status 狀態: 待付款,完成付款
     * @returns TransactionRecord
     * @throws ApiError
     */
    public tradeTransactionRecordCreate(
        requestBody: TransactionRecord,
        action?: string,
        download?: string,
        keyword?: string,
        range?: string,
        status?: string,
    ): CancelablePromise<TransactionRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/trade/transaction_record/',
            query: {
                'action': action,
                'download': download,
                'keyword': keyword,
                'range': range,
                'status': status,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
