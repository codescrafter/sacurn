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
     * Check the credentials and return the REST Token
     * if the credentials are valid and authenticated.
     * Calls Django Auth login method to register User ID
     * in Django session framework
     *
     * Accept the following POST parameters: username, password
     * Return the REST Framework Token Object's key.
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
