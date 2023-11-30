/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AOI } from '../models/AOI';
import type { Categories } from '../models/Categories';
import type { PaginatedExtendedInventoryList } from '../models/PaginatedExtendedInventoryList';
import type { TrendData } from '../models/TrendData';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param keyword 搜尋關鍵字
     * @param page A page number within the paginated result set.
     * @returns PaginatedExtendedInventoryList
     * @throws ApiError
     */
    public inventoryList(
        keyword?: string,
        page?: number,
    ): CancelablePromise<PaginatedExtendedInventoryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/inventory/',
            query: {
                'keyword': keyword,
                'page': page,
            },
        });
    }

    /**
     * @returns AOI
     * @throws ApiError
     */
    public inventoryAccumulatedOrdersInformationRetrieve(): CancelablePromise<AOI> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/inventory/accumulated_orders_information/',
        });
    }

    /**
     * @returns Categories
     * @throws ApiError
     */
    public inventoryCategoriesRetrieve(): CancelablePromise<Categories> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/inventory/categories/',
        });
    }

    /**
     * @returns TrendData
     * @throws ApiError
     */
    public inventoryTrendDataRetrieve(): CancelablePromise<TrendData> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/inventory/trend_data/',
        });
    }

}
