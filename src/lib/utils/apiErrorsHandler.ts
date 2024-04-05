import { ParsedError, isErrorCodeType, isParsedError } from '../types/api';

export const apiErrorsHandler = (errCode: unknown) => {
  const err = Number(errCode);

  if (isErrorCodeType(err)) {
    switch (err) {
      case 400:
        return 'Bad request';
      case 401:
        return 'Unauthorized';
      case 403:
        return 'Forbidden';
      case 404:
        return 'Not found';
      case 429:
        return 'Too many requests';
      case 500:
        return 'Internal server error';
      default:
        return 'Something went wrong';
    }
  }

  return 'Unexpected Error';
};

export const parseError = (err: unknown): ParsedError => {
  if (isErrorCodeType(err)) {
    return apiErrorsHandler(err);
  }

  if (isParsedError(err)) {
    return err;
  }

  return 'Unexpected Error';
};
