/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Company } from '../models/Company';
import type { Employee } from '../models/Employee';
import type { ExtendedCompany } from '../models/ExtendedCompany';
import type { PaginatedCompanyList } from '../models/PaginatedCompanyList';
import type { PaginatedEmployeeList } from '../models/PaginatedEmployeeList';
import type { PaginatedPlanList } from '../models/PaginatedPlanList';
import type { PaginatedPlanRecordList } from '../models/PaginatedPlanRecordList';
import type { PatchedExtendedCompany } from '../models/PatchedExtendedCompany';
import type { Plan } from '../models/Plan';
import type { PlanRecord } from '../models/PlanRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanyService {

    constructor(public readonly httpRequest: BaseHttpRequest) { }

    /**
     * image: registration_document, representative_id_card_front, representative_id_card_back, account_image
     *
     * status: 0(新增公司未送審), 1(送審中) 2(審核通過)
     *
     * address 存放json dict
     * @param page A page number within the paginated result set.
     * @returns PaginatedCompanyList
     * @throws ApiError
     */
    public companyList(
        page?: number,
    ): CancelablePromise<PaginatedCompanyList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/',
            query: {
                'page': page,
            },
        });
    }

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
        requestBody: FormData,
    ): CancelablePromise<Company> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/',
            body: requestBody,
            mediaType: 'multipart/form-data',
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
        requestBody?: FormData,
    ): CancelablePromise<Company> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/company/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'multipart/form-data',
            // mediaType: 'application/json',
        });
    }

    /**
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
     * @param requestBody
     * @returns Employee
     * @throws ApiError
     */
    public companyEmployeeCreate(
        requestBody: Employee,
    ): CancelablePromise<Employee> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/employee/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public companyEmployeeDestroy(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/company/employee/',
        });
    }

    /**
     * List all snippets, or create a new snippet.
     * @returns any No response body
     * @throws ApiError
     */
    public companyLevelRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/level/',
        });
    }

    /**
     * List all snippets, or create a new snippet.
     * @returns any No response body
     * @throws ApiError
     */
    public companyLevelCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/level/',
        });
    }

    /**
     * List all snippets, or create a new snippet.
     * @returns any No response body
     * @throws ApiError
     */
    public companyLevelSetRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/level_set/',
        });
    }

    /**
     * List all snippets, or create a new snippet.
     * @returns any No response body
     * @throws ApiError
     */
    public companyLevelSetCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/level_set/',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedPlanList
     * @throws ApiError
     */
    public companyPlanList(
        page?: number,
    ): CancelablePromise<PaginatedPlanList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/plan/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns Plan
     * @throws ApiError
     */
    public companyPlanCreate(
        requestBody?: Plan,
    ): CancelablePromise<Plan> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/plan/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedPlanRecordList
     * @throws ApiError
     */
    public companyPlanRecordList(
        page?: number,
    ): CancelablePromise<PaginatedPlanRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/plan_record/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns PlanRecord
     * @throws ApiError
     */
    public companyPlanRecordCreate(
        requestBody: PlanRecord,
    ): CancelablePromise<PlanRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/plan_record/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public companySetCompanyStatusRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/set_company_status/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public companyUserRetrieve(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/company/user/',
        });
    }

    /**
     * @returns any No response body
     * @throws ApiError
     */
    public companyUserCreate(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/company/user/',
        });
    }

}
