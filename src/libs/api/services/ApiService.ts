/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenObtainPair } from '../models/TokenObtainPair';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { TokenVerify } from '../models/TokenVerify';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ApiService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.
     *
     * - YAML: application/vnd.oai.openapi
     * - JSON: application/vnd.oai.openapi+json
     * @param format
     * @param lang
     * @returns any
     * @throws ApiError
     */
    public apiSchemaRetrieve(
        format?: 'json' | 'yaml',
        lang?: 'af' | 'ar' | 'ar-dz' | 'ast' | 'az' | 'be' | 'bg' | 'bn' | 'br' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'dsb' | 'el' | 'en' | 'en-au' | 'en-gb' | 'eo' | 'es' | 'es-ar' | 'es-co' | 'es-mx' | 'es-ni' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fr' | 'fy' | 'ga' | 'gd' | 'gl' | 'he' | 'hi' | 'hr' | 'hsb' | 'hu' | 'hy' | 'ia' | 'id' | 'ig' | 'io' | 'is' | 'it' | 'ja' | 'ka' | 'kab' | 'kk' | 'km' | 'kn' | 'ko' | 'ky' | 'lb' | 'lt' | 'lv' | 'mk' | 'ml' | 'mn' | 'mr' | 'ms' | 'my' | 'nb' | 'ne' | 'nl' | 'nn' | 'os' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'ro' | 'ru' | 'sk' | 'sl' | 'sq' | 'sr' | 'sr-latn' | 'sv' | 'sw' | 'ta' | 'te' | 'tg' | 'th' | 'tk' | 'tr' | 'tt' | 'udm' | 'uk' | 'ur' | 'uz' | 'vi' | 'zh-hans' | 'zh-hant',
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/schema/',
            query: {
                'format': format,
                'lang': lang,
            },
        });
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web
     * token pair to prove the authentication of those credentials.
     * @param requestBody
     * @returns TokenObtainPair
     * @throws ApiError
     */
    public apiTokenCreate(
        requestBody: TokenObtainPair,
    ): CancelablePromise<TokenObtainPair> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/token/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     * @param requestBody
     * @returns TokenRefresh
     * @throws ApiError
     */
    public apiTokenRefreshCreate(
        requestBody: TokenRefresh,
    ): CancelablePromise<TokenRefresh> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/token/refresh/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Takes a token and indicates if it is valid.  This view provides no
     * information about a token's fitness for a particular use.
     * @param requestBody
     * @returns TokenVerify
     * @throws ApiError
     */
    public apiTokenVerifyCreate(
        requestBody: TokenVerify,
    ): CancelablePromise<TokenVerify> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/token/verify/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
