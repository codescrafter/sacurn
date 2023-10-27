/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberCard } from '../models/MemberCard';
import type { MemberRecord } from '../models/MemberRecord';
import type { MemberReview } from '../models/MemberReview';
import type { PaginatedExtendMemberSerilizerList } from '../models/PaginatedExtendMemberSerilizerList';
import type { PaginatedMemberPointRecordList } from '../models/PaginatedMemberPointRecordList';
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
     * @returns MemberCard
     * @throws ApiError
     */
    public memberCardRetrieve(): CancelablePromise<MemberCard> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/member/card/',
        });
    }

    /**
     * @param requestBody
     * @returns MemberCard
     * @throws ApiError
     */
    public memberCardCreate(
        requestBody: MemberCard,
    ): CancelablePromise<MemberCard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/member/card/',
            body: requestBody,
            mediaType: 'application/json',
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
     * @returns MemberReview
     * @throws ApiError
     */
    public memberCardReissueRetrieve(): CancelablePromise<MemberReview> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/member/card/reissue/',
        });
    }

    /**
     * @param requestBody
     * @returns MemberReview
     * @throws ApiError
     */
    public memberCardReissueCreate(
        requestBody: MemberReview,
    ): CancelablePromise<MemberReview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/member/card/reissue/',
            body: requestBody,
            mediaType: 'application/json',
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
     * @returns MemberRecord
     * @throws ApiError
     */
    public memberRecordRetrieve(): CancelablePromise<MemberRecord> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/member/record/',
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
