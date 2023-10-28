/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IsOnlineEnum } from './IsOnlineEnum';
import type { Status1d2Enum } from './Status1d2Enum';

export type Employee = {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly status_cht: string;
    readonly last_name: string;
    readonly group_name: string;
    readonly created_at: string | null;
    readonly updated_at: string | null;
    deleted?: boolean;
    deleted_at?: string | null;
    photo?: string | null;
    position?: string | null;
    tel?: string | null;
    tel_extension?: string | null;
    phone?: string | null;
    status?: Status1d2Enum;
    is_online?: IsOnlineEnum;
    user: number;
    company?: number | null;
};

