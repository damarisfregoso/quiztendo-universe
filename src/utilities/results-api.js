import sendRequest from "./send-request";
const BASE_URL = '/api/results';

export function getForQuiz(quizId) {
  return sendRequest(`${BASE_URL}/${quizId}`)
}