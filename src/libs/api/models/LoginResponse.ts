/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type LoginResponse = {
    access?: string;
    refresh: string;
    user: User;
    company?: number;
    company_status?: number;
    profile?: number;
    groups?: Array<any>;
};

