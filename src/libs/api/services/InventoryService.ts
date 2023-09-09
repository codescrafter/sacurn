/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Inventory } from '../models/Inventory';
import type { PaginatedInventoryList } from '../models/PaginatedInventoryList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class InventoryService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedInventoryList
     * @throws ApiError
     */
    public inventoryList(
        page?: number,
    ): CancelablePromise<PaginatedInventoryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/inventory/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Inventory
     * @throws ApiError
     */
    public inventoryCreate(
        requestBody: Inventory,
    ): CancelablePromise<Inventory> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/inventory/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}