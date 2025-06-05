const BASE_URL = 'https://testwalldesign.limsa.uz';

export const loginAdmin = async (phone, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, password }),
  });

  if (!response.ok) {
    throw new Error('Invalid phone or password');
  }

  return await response.json();
};
