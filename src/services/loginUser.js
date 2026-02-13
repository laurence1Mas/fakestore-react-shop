export const loginUser = async (username, password) => {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const text = await response.text(); // récupérer en texte brut
  let data;

  try {
    data = JSON.parse(text); // si c'est du JSON
  } catch {
    // si ce n'est pas du JSON, créer un objet avec message
    data = { message: text };
  }

  return data; // data.token ou data.message
};
