/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ReissueEnum } from './ReissueEnum';
import type { RenewalEnum } from './RenewalEnum';

export type ExtendMemberRecord = {
    readonly id: number;
    readonly current_member: string;
    readonly current_member_annual_renewal_fee: string;
    readonly renewal_deadline_day: string;
    readonly next_member: string;
    readonly next_member_annual_renewal_fee: string;
    readonly loss_card_fee: string;
    buy_cost?: number;
    sell_cost?: number;
    readonly can_upgrade: string;
    readonly level: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    start_at?: string | null;
    expire_at?: string | null;
    renewal?: RenewalEnum;
    renewal_at?: string | null;
    renewal_complete_at?: string | null;
    renewal_expire_at?: string | null;
    upgrade?: ReissueEnum;
    upgrade_at?: string | null;
    upgrade_complete_at?: string | null;
    company: number;
    member: number;
};

