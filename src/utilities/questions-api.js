import sendRequest from "./send-request";
const BASE_URL = '/api/questions';

export function getAll() {
  return sendRequest(BASE_URL);
}