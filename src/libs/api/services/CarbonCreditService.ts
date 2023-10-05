/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CarbonCredit } from '../models/CarbonCredit';
import type { Certificate } from '../models/Certificate';
import type { FilterList } from '../models/FilterList';
import type { PaginatedCarbonCreditList } from '../models/PaginatedCarbonCreditList';
import type { PaginatedWatchListList } from '../models/PaginatedWatchListList';
import type { PatchedCarbonCredit } from '../models/PatchedCarbonCredit';
import type { WatchList } from '../models/WatchList';
import type { WatchListRequestSerialzer } from '../models/WatchListRequestSerialzer';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CarbonCreditService {

    constructor(public readonly httpRequest: BaseHttpRequest) { }

    /**
     * @param desc 價格排序方式
     * @param location 地點
     * @param page A page number within the paginated result set.
     * @param priceRange 價格區間 ex: 100,200
     * @param sortBy 排序依據 price, vintage
     * @param tags 碳權種類
     * @param vintage 年份
     * @returns PaginatedCarbonCreditList
     * @throws ApiError
     */
    public carbonCreditList(
        desc?: boolean,
        location?: string,
        page?: number,
        priceRange?: string,
        sortBy?: string,
        tags?: string,
        vintage?: string,
    ): CancelablePromise<PaginatedCarbonCreditList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/',
            query: {
                'desc': desc,
                'location': location,
                'page': page,
                'price_range': priceRange,
                'sort_by': sortBy,
                'tags': tags,
                'vintage': vintage,
            },
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns CarbonCredit
     * @throws ApiError
     */
    public carbonCreditPartialUpdate(
        id: number,
        requestBody?: PatchedCarbonCredit,
    ): CancelablePromise<CarbonCredit> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/carbon_credit/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditCarbonLocationRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/carbon_location/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditCarbonLocationCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/carbon_credit/carbon_location/',
        });
    }

    /**
     * @param carbonCredit 碳權
     * @returns Certificate
     * @throws ApiError
     */
    public carbonCreditCertificateRetrieve(
        carbonCredit?: string,
    ): CancelablePromise<Certificate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/certificate/',
            query: {
                'carbon_credit': carbonCredit,
            },
        });
    }

    /**
     * @param requestBody
     * @returns CarbonCredit
     * @throws ApiError
     */
    public carbonCreditCreateCreate(
        requestBody: CarbonCredit,
    ): CancelablePromise<CarbonCredit> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/carbon_credit/create/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns FilterList
     * @throws ApiError
     */
    public carbonCreditFilterListRetrieve(): CancelablePromise<FilterList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/filter_list/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditImpactRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/impact/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditImpactCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/carbon_credit/impact/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditLocationRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/location/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditLocationCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/carbon_credit/location/',
        });
    }

    /**
     * @param carbonCredit 碳權
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditMailCertificateRetrieve(
        carbonCredit?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/mail_certificate/',
            query: {
                'carbon_credit': carbonCredit,
            },
        });
    }

    /**
     * @param desc 價格排序方式
     * @param location 地點
     * @param page A page number within the paginated result set.
     * @param priceRange 價格 ex: 100,200
     * @param sortBy 排序依據 price, vintage
     * @param tags 碳權種類
     * @param vintage 年份
     * @returns PaginatedWatchListList
     * @throws ApiError
     */
    public carbonCreditWatchListList(
        desc?: boolean,
        location?: string,
        page?: number,
        priceRange?: string,
        sortBy?: string,
        tags?: string,
        vintage?: string,
    ): CancelablePromise<PaginatedWatchListList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/watch_list/',
            query: {
                'desc': desc,
                'location': location,
                'page': page,
                'price_range': priceRange,
                'sort_by': sortBy,
                'tags': tags,
                'vintage': vintage,
            },
        });
    }

    /**
     * @param requestBody
     * @returns WatchList
     * @throws ApiError
     */
    public carbonCreditWatchListCreate(
        requestBody?: WatchListRequestSerialzer,
    ): CancelablePromise<WatchList> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/carbon_credit/watch_list/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public carbonCreditWatchListDestroy(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/carbon_credit/watch_list/',
        });
    }

    /**
     * @param id
     * @returns void
     * @throws ApiError
     */
    public carbonCreditWatchListDestroy2(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/carbon_credit/watch_list/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns FilterList
     * @throws ApiError
     */
    public carbonCreditWatchListFilterListRetrieve(): CancelablePromise<FilterList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/watch_list_filter_list/',
        });
    }

}