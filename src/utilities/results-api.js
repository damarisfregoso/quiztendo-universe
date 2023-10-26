import sendRequest from "./send-request";
const BASE_URL = '/api/results';

export function getForQuiz(quizId) {
  return sendRequest(`${BASE_URL}/${quizId}`)
}

export function makeChoice(quizResultId, choiceId) {
  return sendRequest(`${BASE_URL}/${quizResultId}/choices/${choiceId}`, 'PUT');
}
export function getLeaderBoard(quizId) {
  return sendRequest(`${BASE_URL}/leaderboard/${quizId}`);
}

export function getBestResults() {
  return sendRequest(`${BASE_URL}/best-for-user`)
}

