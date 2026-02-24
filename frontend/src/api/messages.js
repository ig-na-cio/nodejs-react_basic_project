const API_URL = "http://localhost:5000/api/messages";

export async function getMessages(userId) {
  const res = await fetch(`${API_URL}/${userId}`);
  console.log("Response from API:", res);
  return res.json();
}


export async function sendMessage(userId, title, text) {
  const sender = userId;
  const recipient = userId;
  const res = await fetch(`${API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, text, senderId: sender, recipientId: recipient }),
  });
  console.log("From endpoint");
  console.log(res);
  return res.json();
}