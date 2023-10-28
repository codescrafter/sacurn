/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReissueEnum } from './ReissueEnum';
import type { RevokeEnum } from './RevokeEnum';
import type { Status923Enum } from './Status923Enum';

export type MemberCard = {
    readonly id: number;
    issue_at?: string | null;
    reissue?: ReissueEnum;
    reissue_at?: string | null;
    reissue_completed_at?: string | null;
    reissue_checked_at?: string | null;
    revoke?: RevokeEnum;
    revoke_at?: string | null;
    revoke_complete_at?: string | null;
    status?: Status923Enum;
    company: number;
};

