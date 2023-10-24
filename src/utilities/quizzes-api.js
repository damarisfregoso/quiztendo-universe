import sendRequest from "./send-request";
const BASE_URL = '/api/quizzes';

export function getAll() {
  return sendRequest(BASE_URL)
}
export function getOne(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}
