/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberRecord } from '../models/MemberRecord';
import type { PaginatedExtendMemberSerilizerList } from '../models/PaginatedExtendMemberSerilizerList';
import type { PaginatedMemberCardList } from '../models/PaginatedMemberCardList';
import type { PaginatedMemberPointRecordList } from '../models/PaginatedMemberPointRecordList';
import type { PaginatedMemberRecordList } from '../models/PaginatedMemberRecordList';
import type { PatchedMemberRecord } from '../models/PatchedMemberRecord';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MemberService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedExtendMemberSerilizerList
     * @throws ApiError
     */
    public memberList(
        page?: number,
    ): CancelablePromise<PaginatedExtendMemberSerilizerList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/member/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedMemberCardList
     * @throws ApiError
     */
    public memberCardList(
        page?: number,
    ): CancelablePromise<PaginatedMemberCardList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/member/card/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @returns void
     * @throws ApiError
     */
    public memberCardDestroy(): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/member/card/',
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @param range 期間 ex: 2023-09-01,2023-09-30
     * @returns PaginatedMemberPointRecordList
     * @throws ApiError
     */
    public memberPointRecordList(
        page?: number,
        range?: string,
    ): CancelablePromise<PaginatedMemberPointRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/member/point_record/',
            query: {
                'page': page,
                'range': range,
            },
        });
    }

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedMemberRecordList
     * @throws ApiError
     */
    public memberRecordList(
        page?: number,
    ): CancelablePromise<PaginatedMemberRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/member/record/',
            query: {
                'page': page,
            },
        });
    }

    /**
     * @param requestBody
     * @returns MemberRecord
     * @throws ApiError
     */
    public memberRecordCreate(
        requestBody: MemberRecord,
    ): CancelablePromise<MemberRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/member/record/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns MemberRecord
     * @throws ApiError
     */
    public memberUpgradePartialUpdate(
        requestBody?: PatchedMemberRecord,
    ): CancelablePromise<MemberRecord> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/member/upgrade/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
