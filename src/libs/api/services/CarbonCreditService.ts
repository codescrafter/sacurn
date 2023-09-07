/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Certificate } from '../models/Certificate';
import type { FilterList } from '../models/FilterList';
import type { PaginatedCarbonCreditList } from '../models/PaginatedCarbonCreditList';
import type { PaginatedWatchListList } from '../models/PaginatedWatchListList';
import type { WatchList } from '../models/WatchList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CarbonCreditService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param desc 價格排序方式: false(default), true
     * @param location 地點
     * @param page A page number within the paginated result set.
     * @param price 價格 ex: 100,200
     * @param tags 碳權種類
     * @param vintage 年份
     * @returns PaginatedCarbonCreditList
     * @throws ApiError
     */
    public carbonCreditList(
        desc?: string,
        location?: string,
        page?: number,
        price?: string,
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
                'price': price,
                'tags': tags,
                'vintage': vintage,
            },
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
     * @param carbonCreditId 碳權pk
     * @returns Certificate
     * @throws ApiError
     */
    public carbonCreditCertificateRetrieve(
        carbonCreditId?: string,
    ): CancelablePromise<Certificate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/certificate/',
            query: {
                'carbon_credit_id': carbonCreditId,
            },
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditCreateRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/create/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditCreateCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/carbon_credit/create/',
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
     * @param carbonCreditId 碳權pk
     * @returns any No response body
     * @throws ApiError
     */
    public carbonCreditMailCertificateRetrieve(
        carbonCreditId?: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/mail_certificate/',
            query: {
                'carbon_credit_id': carbonCreditId,
            },
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedWatchListList
     * @throws ApiError
     */
    public carbonCreditWatchListList(
        page?: number,
    ): CancelablePromise<PaginatedWatchListList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/carbon_credit/watch_list/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns WatchList
     * @throws ApiError
     */
    public carbonCreditWatchListCreate(
        requestBody: WatchList,
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

}
