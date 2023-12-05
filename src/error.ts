export const ModalCloseError = 'modal-close';

export enum ErrorType {
  TWID_ERROR = 'TWID_ERROR',
  IGNORE_ERROR = 'IGNORE_ERROR'
}

export class SacurnExchangeError extends Error {
  code: string = '';
  msg: string = '';
  type: ErrorType = ErrorType.IGNORE_ERROR;

  constructor(code: string, message: string, type: ErrorType) {
    super(message);
    this.name = 'SacurnExchangeError';
    this.code = code;
    this.msg = message;
    this.type = type;
  }
}

export class SacurnExchangeTwidError extends SacurnExchangeError {
  constructor(code: string, message: string) {
    super(code, message, ErrorType.TWID_ERROR);
  }
}
