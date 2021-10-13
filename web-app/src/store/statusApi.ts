export const HTTP_STATUS = {
    VALIDATION: 400,
    UNAUTHORIZED: 401,
    NOT_ACCEPTABLE: 406,
    CONFLICT: 409,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    PRECONDITION_FAILED: 412,
    PAYLOAD_LARGE: 413,
    UNSUPPORTED_MEDIA: 415,
    INVALID_PARAMS: 422,
    OK_NO_VALUE: 204,
    OK_CREATE: 201,
    OK: 200,
  }
  export class statusApi {
    static CheckStatusGetSuccess = (response: number) => {
      return response === HTTP_STATUS.OK || response === HTTP_STATUS.OK_NO_VALUE
    }
    static CheckStatusGetFailure = (response: number) => {
      return (
        response === HTTP_STATUS.VALIDATION ||
        response === HTTP_STATUS.NOT_FOUND ||
        response === HTTP_STATUS.INVALID_PARAMS ||
        response === HTTP_STATUS.FORBIDDEN
      )
    }
    static CheckUnauthorized = (response: number) => {
      return response === HTTP_STATUS.UNAUTHORIZED
    }
    static checkForbidden = (response: number) => {
      return response === HTTP_STATUS.FORBIDDEN
    }
    static CheckConflict = (response: number) => {
      return response === HTTP_STATUS.CONFLICT || response === HTTP_STATUS.NOT_ACCEPTABLE
    }
    static CheckStatusPostSuccess = (response: number) => {
      return response === HTTP_STATUS.OK || response === HTTP_STATUS.OK_CREATE
    }
    static CheckStatusPostFailure = (response: number) => {
      return (
        response === HTTP_STATUS.VALIDATION ||
        response === HTTP_STATUS.NOT_FOUND ||
        response === HTTP_STATUS.INVALID_PARAMS ||
        response === HTTP_STATUS.FORBIDDEN ||
        response === HTTP_STATUS.PRECONDITION_FAILED
      )
    }
    static CheckStatusPutSuccess = (response: number) => {
      return response === HTTP_STATUS.OK || response === HTTP_STATUS.OK_CREATE
    }
    static CheckStatusPutFailure = (response: number) => {
      return (
        response === HTTP_STATUS.VALIDATION ||
        response === HTTP_STATUS.NOT_FOUND ||
        response === HTTP_STATUS.INVALID_PARAMS ||
        response === HTTP_STATUS.FORBIDDEN
      )
    }
    static CheckStatusDeleteSuccess = (response: number) => {
      return response === HTTP_STATUS.OK
    }
    static CheckStatusDeleteFailure = (response: number) => {
      return (
        response === HTTP_STATUS.VALIDATION ||
        response === HTTP_STATUS.NOT_FOUND ||
        response === HTTP_STATUS.INVALID_PARAMS ||
        response === HTTP_STATUS.FORBIDDEN
      )
    }
  }