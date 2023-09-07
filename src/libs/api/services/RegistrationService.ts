/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Registration } from '../models/Registration';
import type { RegistrationResponse } from '../models/RegistrationResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RegistrationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns RegistrationResponse
     * @throws ApiError
     */
    public registrationCreate(
        requestBody: Registration,
    ): CancelablePromise<RegistrationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/registration/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
