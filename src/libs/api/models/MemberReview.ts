/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActionEnum } from './ActionEnum';
import type { Status1d2Enum } from './Status1d2Enum';

export type MemberReview = {
    readonly id: number;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    action: ActionEnum;
    status?: Status1d2Enum;
    pass_at?: string | null;
    company: number;
    twid_record?: number | null;
};

