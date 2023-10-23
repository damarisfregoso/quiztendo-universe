import sendRequest from "./send-request";
const BASE_URL = '/api/quizzes';

export function getAll() {
  return sendRequest(BASE_URL);
}