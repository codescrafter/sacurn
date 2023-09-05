/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Login } from '../models/Login';
import type { LoginResponse } from '../models/LoginResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class LoginService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * company_status: 0(尚未完成公司註冊), 1(已完成公司註冊）
     * @param requestBody
     * @returns LoginResponse
     * @throws ApiError
     */
    public loginCreate(
        requestBody: Login,
    ): CancelablePromise<LoginResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/login/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
