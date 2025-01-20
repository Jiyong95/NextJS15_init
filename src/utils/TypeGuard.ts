export function hasErrorResponse(e: unknown): e is { response: object } {
  return (
    typeof e === 'object' && e !== null && 'response' in e && typeof e.response === 'object' && e.response !== null
  );
}

export function hasErrorData(e: unknown): e is { response: { data: object } } {
  return hasErrorResponse(e) && 'data' in e.response && typeof e.response.data === 'object';
}

export function hasErrorCode(e: unknown): e is { response: { data: { errorCode: string } } } {
  return hasErrorData(e) && 'errorCode' in e.response.data && typeof e.response.data.errorCode === 'string';
}

export function hasErrorMessage(e: unknown): e is { response: { data: { message: string } } } {
  return hasErrorData(e) && 'message' in e.response.data && typeof e.response.data.message === 'string';
}
