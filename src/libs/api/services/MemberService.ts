/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtendMemberRecord } from '../models/ExtendMemberRecord';
import type { MemberCard } from '../models/MemberCard';
import type { MemberChange } from '../models/MemberChange';
import type { MemberRecord } from '../models/MemberRecord';
import type { MemberReview } from '../models/MemberReview';
import type { PaginatedExtendMemberSerilizerList } from '../models/PaginatedExtendMemberSerilizerList';
import type { PaginatedMemberPointRecordList } from '../models/PaginatedMemberPointRecordList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MemberService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @param page A page number within the paginated result set.
   * @returns PaginatedExtendMemberSerilizerList
   * @throws ApiError
   */
  public memberList(page?: number): CancelablePromise<PaginatedExtendMemberSerilizerList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/member/',
      query: {
        page: page
      }
    });
  }

  /**
   * revoke(UNCONFIRMED = 0 CONFIRMED = 1 REVIEWING = 3 COMPLETED = 4)
   * reissue(UNCONFIRMED = 0 CONFIRMED = 1 COMPLETED = 2 CHECKED = 3)
   * status(EXPIRED = 0 CURRENT = 1)
   * @returns MemberCard
   * @throws ApiError
   */
  public memberCardRetrieve(): CancelablePromise<MemberCard> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/member/card/'
    });
  }

  /**
   * @returns MemberReview
   * @throws ApiError
   */
  public memberCardReissueRetrieve(): CancelablePromise<MemberReview> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/member/card/reissue/'
    });
  }

  /**
   * @param id twid_record
   * @param requestBody
   * @returns MemberReview
   * @throws ApiError
   */
  public memberCardReissueCreate(id: string, requestBody?: MemberChange): CancelablePromise<MemberReview> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/card/reissue/',
      query: {
        id: id
      },
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * @param requestBody
   * @returns MemberCard
   * @throws ApiError
   */
  public memberCardReissueApplyCreate(requestBody: MemberCard): CancelablePromise<MemberCard> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/card/reissue_apply/',
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * @param requestBody
   * @returns MemberCard
   * @throws ApiError
   */
  public memberCardReissueCheckCreate(requestBody: MemberCard): CancelablePromise<MemberCard> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/card/reissue_check/',
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * revoke(UNCONFIRMED = 0 CONFIRMED = 1 REVIEWING = 3 COMPLETED = 4)
   * reissue(UNCONFIRMED = 0 CONFIRMED = 1 COMPLETED = 2 CHECKED = 3)
   * status(EXPIRED = 0 CURRENT = 1)
   * @param id twid_record
   * @param requestBody
   * @returns MemberCard
   * @throws ApiError
   */
  public memberCardRevokeCreate(id: string, requestBody?: MemberChange): CancelablePromise<MemberCard> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/card/revoke/',
      query: {
        id: id
      },
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * @param requestBody
   * @returns MemberCard
   * @throws ApiError
   */
  public memberCardRevokeApplyCreate(requestBody: MemberCard): CancelablePromise<MemberCard> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/card/revoke_apply/',
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * @param page A page number within the paginated result set.
   * @param range 期間 ex: 2023-09-01,2023-09-30
   * @returns PaginatedMemberPointRecordList
   * @throws ApiError
   */
  public memberPointRecordList(page?: number, range?: string): CancelablePromise<PaginatedMemberPointRecordList> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/member/point_record/',
      query: {
        page: page,
        range: range
      }
    });
  }

  /**
   * renewal(UNCONFIRMED = 0 CONFIRMED = 1 COMPLETED = 2)
   * upgrade(UNCONFIRMED = 0 CONFIRMED = 1 REVIEWING = 2 COMPLETED = 3)
   * @returns ExtendMemberRecord
   * @throws ApiError
   */
  public memberRecordRetrieve(): CancelablePromise<ExtendMemberRecord> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/member/record/'
    });
  }

  /**
   * renewal(UNCONFIRMED = 0 CONFIRMED = 1 COMPLETED = 2)
   * upgrade(UNCONFIRMED = 0 CONFIRMED = 1 REVIEWING = 2 COMPLETED = 3)
   * @param requestBody
   * @returns MemberRecord
   * @throws ApiError
   */
  public memberRecordCreate(requestBody: MemberRecord): CancelablePromise<MemberRecord> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/record/',
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * @param requestBody
   * @returns ExtendMemberRecord
   * @throws ApiError
   */
  public memberRenewalCreate(requestBody: MemberRecord): CancelablePromise<ExtendMemberRecord> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/renewal/',
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * @returns ExtendMemberRecord
   * @throws ApiError
   */
  public memberUpgradeRetrieve(): CancelablePromise<ExtendMemberRecord> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/member/upgrade/'
    });
  }

  /**
   * @param id twid_record
   * @param requestBody
   * @returns ExtendMemberRecord
   * @throws ApiError
   */
  public memberUpgradeCreate(id: string, requestBody?: MemberChange): CancelablePromise<ExtendMemberRecord> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/upgrade/',
      query: {
        id: id
      },
      body: requestBody,
      mediaType: 'application/json'
    });
  }

  /**
   * @param requestBody
   * @returns ExtendMemberRecord
   * @throws ApiError
   */
  public memberUpgradeApplyCreate(requestBody: MemberRecord): CancelablePromise<ExtendMemberRecord> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/member/upgrade_apply/',
      body: requestBody,
      mediaType: 'application/json'
    });
  }
}
