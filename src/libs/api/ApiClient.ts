/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { ApiService } from './services/ApiService';
import { AuditLogService } from './services/AuditLogService';
import { CarbonCreditService } from './services/CarbonCreditService';
import { CompanyService } from './services/CompanyService';
import { DjRestAuthService } from './services/DjRestAuthService';
import { InventoryService } from './services/InventoryService';
import { LoginService } from './services/LoginService';
import { MemberService } from './services/MemberService';
import { RegistrationService } from './services/RegistrationService';
import { ShopService } from './services/ShopService';
import { TradeService } from './services/TradeService';
import { TwidService } from './services/TwidService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class ApiClient {

    public readonly api: ApiService;
    public readonly auditLog: AuditLogService;
    public readonly carbonCredit: CarbonCreditService;
    public readonly company: CompanyService;
    public readonly djRestAuth: DjRestAuthService;
    public readonly inventory: InventoryService;
    public readonly login: LoginService;
    public readonly member: MemberService;
    public readonly registration: RegistrationService;
    public readonly shop: ShopService;
    public readonly trade: TradeService;
    public readonly twid: TwidService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://platform-api2.sacurn-dev.com',
            VERSION: config?.VERSION ?? '0.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.api = new ApiService(this.request);
        this.auditLog = new AuditLogService(this.request);
        this.carbonCredit = new CarbonCreditService(this.request);
        this.company = new CompanyService(this.request);
        this.djRestAuth = new DjRestAuthService(this.request);
        this.inventory = new InventoryService(this.request);
        this.login = new LoginService(this.request);
        this.member = new MemberService(this.request);
        this.registration = new RegistrationService(this.request);
        this.shop = new ShopService(this.request);
        this.trade = new TradeService(this.request);
        this.twid = new TwidService(this.request);
    }
}

