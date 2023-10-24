/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status923Enum } from './Status923Enum';

export type MemberCard = {
    readonly id: number;
    issue_at?: string | null;
    revoke_at?: string | null;
    revoke_complete_at?: string | null;
    status?: Status923Enum;
    company: number;
};

