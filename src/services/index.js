const BASE_URL = "http://localhost:5000/api/v1";

export const get = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async (url, body) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
