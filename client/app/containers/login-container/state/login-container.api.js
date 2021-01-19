export const fetchLoginApi = ({ username, password }) => {
  const options = {
    method: 'POST',
    headers: {
      environment: 'mock',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      type: "USER_PASSWORD_AUTH",
    }),
  }

  return fetch('https://api.bybits.co.uk/auth/token', options);
}
