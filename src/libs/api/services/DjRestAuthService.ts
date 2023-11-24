/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JWT } from '../models/JWT';
import type { Login } from '../models/Login';
import type { PasswordChange } from '../models/PasswordChange';
import type { PasswordReset } from '../models/PasswordReset';
import type { PasswordResetConfirm } from '../models/PasswordResetConfirm';
import type { PatchedUserDetails } from '../models/PatchedUserDetails';
import type { RestAuthDetail } from '../models/RestAuthDetail';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { TokenVerify } from '../models/TokenVerify';
import type { UserDetails } from '../models/UserDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DjRestAuthService {

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
     * @returns JWT
     * @throws ApiError
     */
    public djRestAuthLoginCreate(
        requestBody: Login,
    ): CancelablePromise<JWT> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/login/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Calls Django logout method and delete the Token object
     * assigned to the current User object.
     *
     * Accepts/Returns nothing.
     * @returns RestAuthDetail
     * @throws ApiError
     */
    public djRestAuthLogoutCreate(): CancelablePromise<RestAuthDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/logout/',
        });
    }

    /**
     * Calls Django Auth SetPasswordForm save method.
     *
     * Accepts the following POST parameters: new_password1, new_password2
     * Returns the success/fail message.
     * @param requestBody
     * @returns RestAuthDetail
     * @throws ApiError
     */
    public djRestAuthPasswordChangeCreate(
        requestBody: PasswordChange,
    ): CancelablePromise<RestAuthDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/password/change/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Calls Django Auth PasswordResetForm save method.
     *
     * Accepts the following POST parameters: email
     * Returns the success/fail message.
     * @param requestBody
     * @returns RestAuthDetail
     * @throws ApiError
     */
    public djRestAuthPasswordResetCreate(
        requestBody: PasswordReset,
    ): CancelablePromise<RestAuthDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/password/reset/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Password reset e-mail link is confirmed, therefore
     * this resets the user's password.
     *
     * Accepts the following POST parameters: token, uid,
     * new_password1, new_password2
     * Returns the success/fail message.
     * @param requestBody
     * @returns RestAuthDetail
     * @throws ApiError
     */
    public djRestAuthPasswordResetConfirmCreate(
        requestBody: PasswordResetConfirm,
    ): CancelablePromise<RestAuthDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/password/reset/confirm/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

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
    public djRestAuthPasswordResetConfirmCreate2(
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

    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     * @param requestBody
     * @returns TokenRefresh
     * @throws ApiError
     */
    public djRestAuthTokenRefreshCreate(
        requestBody: TokenRefresh,
    ): CancelablePromise<TokenRefresh> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/token/refresh/',
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
    public djRestAuthTokenVerifyCreate(
        requestBody: TokenVerify,
    ): CancelablePromise<TokenVerify> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/dj-rest-auth/token/verify/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reads and updates UserModel fields
     * Accepts GET, PUT, PATCH methods.
     *
     * Default accepted fields: username, first_name, last_name
     * Default display fields: pk, username, email, first_name, last_name
     * Read-only fields: pk, email
     *
     * Returns UserModel fields.
     * @returns UserDetails
     * @throws ApiError
     */
    public djRestAuthUserRetrieve(): CancelablePromise<UserDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dj-rest-auth/user/',
        });
    }

    /**
     * Reads and updates UserModel fields
     * Accepts GET, PUT, PATCH methods.
     *
     * Default accepted fields: username, first_name, last_name
     * Default display fields: pk, username, email, first_name, last_name
     * Read-only fields: pk, email
     *
     * Returns UserModel fields.
     * @param requestBody
     * @returns UserDetails
     * @throws ApiError
     */
    public djRestAuthUserUpdate(
        requestBody: UserDetails,
    ): CancelablePromise<UserDetails> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/dj-rest-auth/user/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Reads and updates UserModel fields
     * Accepts GET, PUT, PATCH methods.
     *
     * Default accepted fields: username, first_name, last_name
     * Default display fields: pk, username, email, first_name, last_name
     * Read-only fields: pk, email
     *
     * Returns UserModel fields.
     * @param requestBody
     * @returns UserDetails
     * @throws ApiError
     */
    public djRestAuthUserPartialUpdate(
        requestBody?: PatchedUserDetails,
    ): CancelablePromise<UserDetails> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/dj-rest-auth/user/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
