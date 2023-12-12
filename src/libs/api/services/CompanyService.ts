/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Company } from '../models/Company';
import type { Employee } from '../models/Employee';
import type { EmployeesPhoto } from '../models/EmployeesPhoto';
import type { ExtendedCompany } from '../models/ExtendedCompany';
import type { ExtendEmployee } from '../models/ExtendEmployee';
import type { Forgot } from '../models/Forgot';
import type { PaginatedEmployeeList } from '../models/PaginatedEmployeeList';
import type { PaginatedGroupList } from '../models/PaginatedGroupList';
import type { PatchedEmployeesPatch } from '../models/PatchedEmployeesPatch';
import type { PatchedExtendedCompany } from '../models/PatchedExtendedCompany';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanyService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * image: registration_document, representative_id_card_front, representative_id_card_back, account_image
     *
     * status: 0(新增公司未送審), 1(送審中) 2(審核通過)
     *
     * address 存放json dict
     * @param requestBody
     * @returns Company
     * @throws ApiError
     */
    public companyCreate(
        requestBody: ExtendedCompany,
    ): CancelablePromise<Company> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/',
            body: requestBody,
            mediaType: 'application/multi-part/form-data',
        });
    }

    /**
     * image: registration_document, representative_id_card_front, representative_id_card_back, account_image
     *
     * status: 0(新增公司未送審), 1(送審中) 2(審核通過)
     *
     * address 存放json dict
     * @param id
     * @returns Company
     * @throws ApiError
     */
    public companyRetrieve(
        id: number,
    ): CancelablePromise<Company> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * image: registration_document, representative_id_card_front, representative_id_card_back, account_image
     *
     * status: 0(新增公司未送審), 1(送審中) 2(審核通過)
     *
     * address 存放json dict
     * @param id
     * @param requestBody
     * @returns Company
     * @throws ApiError
     */
    public companyPartialUpdate(
        id: number,
        requestBody?: PatchedExtendedCompany,
    ): CancelablePromise<Company> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/company/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/multi-part/form-data',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public companyCheckUserStatusRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/check_user_status/',
        });
    }

    /**
     * 網址上帶的id是員工列表回傳裡的id 不是user
     *
     * status 0尚未驗證 1驗證 2凍結
     * @param page A page number within the paginated result set.
     * @returns PaginatedEmployeeList
     * @throws ApiError
     */
    public companyEmployeeList(
        page?: number,
    ): CancelablePromise<PaginatedEmployeeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/employee/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * 網址上帶的id是員工列表回傳裡的id 不是user
     *
     * status 0尚未驗證 1驗證 2凍結
     * @param requestBody
     * @returns Employee
     * @throws ApiError
     */
    public companyEmployeeCreate(
        requestBody: ExtendEmployee,
    ): CancelablePromise<Employee> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/employee/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 網址上帶的id是員工列表回傳裡的id 不是user
     *
     * status 0尚未驗證 1驗證 2凍結
     * @param id
     * @returns Employee
     * @throws ApiError
     */
    public companyEmployeeRetrieve(
        id: number,
    ): CancelablePromise<Employee> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/employee/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * 網址上帶的id是員工列表回傳裡的id 不是user
     *
     * status 0尚未驗證 1驗證 2凍結
     * @param id
     * @param requestBody
     * @returns Employee
     * @throws ApiError
     */
    public companyEmployeePartialUpdate(
        id: number,
        requestBody?: PatchedEmployeesPatch,
    ): CancelablePromise<Employee> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/company/employee/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * 網址上帶的id是員工列表回傳裡的id 不是user
     *
     * status 0尚未驗證 1驗證 2凍結
     * @param id
     * @returns void
     * @throws ApiError
     */
    public companyEmployeeDestroy(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/company/employee/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * id是Profile id
     * @param id
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public companyEmployeeUploadPhotoCreate(
        id: number,
        requestBody: EmployeesPhoto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/employee/{id}/upload_photo/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/multi-part/form-data',
        });
    }

    /**
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public companyForgotPasswordCreate(
        requestBody?: Forgot,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/forgot_password/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedGroupList
     * @throws ApiError
     */
    public companyGroupList(
        page?: number,
    ): CancelablePromise<PaginatedGroupList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/group/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public companyReviewPassReqRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/review_pass_req/',
        });
    }

}
