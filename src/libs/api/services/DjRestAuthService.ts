/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PasswordResetConfirm } from '../models/PasswordResetConfirm';
import type { RestAuthDetail } from '../models/RestAuthDetail';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DjRestAuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Password reset e-mail link is confirmed, therefore
     * this resets the user's password.
     *
     * Accepts the following POST parameters: token, uid,
     * new_password1, new_password2
     * Returns the success/fail message.
     * @param token
     * @param uidb64
     * @param requestBody
     * @returns RestAuthDetail
     * @throws ApiError
     */
    public djRestAuthPasswordResetConfirmCreate(
        token: string,
        uidb64: string,
        requestBody: PasswordResetConfirm,
    ): CancelablePromise<RestAuthDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/password/reset/confirm/{uidb64}/{token}/',
            path: {
                'token': token,
                'uidb64': uidb64,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
