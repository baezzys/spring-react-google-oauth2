export const getLoginToken = async idToken => {
  const API_URL = process.env.REACT_APP_API_URL;
  const path = '/v1/oauth/login';

  try {
    const response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      body: JSON.stringify(idToken),
    });

    if (!response.ok) throw new Error('bad server condition');
    const result = response.json();

    return result;
  } catch (e) {
    console.error('getLoginToken Error: ', e.message);
  }
};
