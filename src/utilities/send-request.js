import { getToken } from "./users-service";

export default async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    options.headers ||= {};
    //options.header = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options)
  //res.ok will be false if the status code is not in 2xx range
  if (res.ok) { 
    return res.json();
  } else {
    console.error('API Response Status:', res.status);
    console.error('API Response Text:', await res.text()); 
    throw new Error('Bad Request');
  }
}
const token = getToken();
console.log('Token:', token);