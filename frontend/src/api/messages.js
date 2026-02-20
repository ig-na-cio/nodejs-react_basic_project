const API_URL = "http://localhost:5000/api/messages";

export async function getMessages(userId) {
  const res = await fetch(`${API_URL}/${userId}`);
  return res.json();
}