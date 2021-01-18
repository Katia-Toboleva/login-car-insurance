export const fetchPolicy = () => {
  const accessToken = localStorage.getItem('access-token');

  const options = {
    method: 'GET',
    headers: {
      environment: 'mock',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
  }

  return fetch('https://api.bybits.co.uk/policys/details', options);
}
