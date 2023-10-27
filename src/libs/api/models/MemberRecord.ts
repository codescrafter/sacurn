/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RenewalEnum } from './RenewalEnum';
import type { Status923Enum } from './Status923Enum';
import type { UpgradeEnum } from './UpgradeEnum';

export type MemberRecord = {
    readonly id: number;
    readonly current_member: string;
    readonly current_member_annual_renewal_fee: string;
    readonly renewal_deadline_day: string;
    readonly next_member: string;
    readonly next_member_annual_renewal_fee: string;
    readonly buy_cost: string;
    readonly sell_cost: string;
    readonly can_upgrade: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    start_at?: string | null;
    expire_at?: string | null;
    status?: Status923Enum;
    renewal?: RenewalEnum;
    renewal_at?: string | null;
    renewal_complete_at?: string | null;
    upgrade?: UpgradeEnum;
    upgrade_at?: string | null;
    upgrade_complete_at?: string | null;
    company: number;
    member: number;
};

