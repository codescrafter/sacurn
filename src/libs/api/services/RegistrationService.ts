/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JWT } from '../models/JWT';
import type { Register } from '../models/Register';
import type { ResendEmailVerification } from '../models/ResendEmailVerification';
import type { RestAuthDetail } from '../models/RestAuthDetail';
import type { VerifyEmail } from '../models/VerifyEmail';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RegistrationService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param requestBody
     * @returns JWT
     * @throws ApiError
     */
    public registrationCreate(
        requestBody: Register,
    ): CancelablePromise<JWT> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/registration/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns RestAuthDetail
     * @throws ApiError
     */
    public registrationResendEmailCreate(
        requestBody?: ResendEmailVerification,
    ): CancelablePromise<RestAuthDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/registration/resend-email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns RestAuthDetail
     * @throws ApiError
     */
    public registrationVerifyEmailCreate(
        requestBody: VerifyEmail,
    ): CancelablePromise<RestAuthDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/registration/verify-email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
