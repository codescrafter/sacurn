/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type LoginResponse = {
    access?: string;
    refresh: string;
    user: User;
    company_id?: number;
    company_status?: number;
};
