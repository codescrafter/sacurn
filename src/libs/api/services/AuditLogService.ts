/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedAuditLogList } from '../models/PaginatedAuditLogList';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuditLogService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param page A page number within the paginated result set.
     * @returns PaginatedAuditLogList
     * @throws ApiError
     */
    public auditLogList(
        page?: number,
    ): CancelablePromise<PaginatedAuditLogList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/audit_log/',
            query: {
                'page': page,
            },
        });
    }

}
