/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CpntAuth } from '../models/CpntAuth';
import type { CpntAuthResponse } from '../models/CpntAuthResponse';
import type { DoTwdsS0S1 } from '../models/DoTwdsS0S1';
import type { GenPkcs7Tbs } from '../models/GenPkcs7Tbs';
import type { GenPkcs7TbsResponse } from '../models/GenPkcs7TbsResponse';
import type { PreDoTwdsS0Response } from '../models/PreDoTwdsS0Response';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TwidService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns CpntAuthResponse
     * @throws ApiError
     */
    public twidCpntAuthCreate(
        requestBody: CpntAuth,
    ): CancelablePromise<CpntAuthResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/twid/cpntAuth/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public twidDoTwdsS0S1Create(
        requestBody?: DoTwdsS0S1,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/twid/doTwdsS0S1/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns GenPkcs7TbsResponse
     * @throws ApiError
     */
    public twidGenPkcs7TbsCreate(
        requestBody?: GenPkcs7Tbs,
    ): CancelablePromise<GenPkcs7TbsResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/twid/genPkcs7Tbs/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns PreDoTwdsS0Response
     * @throws ApiError
     */
    public twidPreDoTwdsS0Create(): CancelablePromise<PreDoTwdsS0Response> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/twid/preDoTwdsS0/',
        });
    }

}
