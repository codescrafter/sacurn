/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberRecord } from '../models/MemberRecord';
import type { PaginatedMemberRecordList } from '../models/PaginatedMemberRecordList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MemberService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

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

}
