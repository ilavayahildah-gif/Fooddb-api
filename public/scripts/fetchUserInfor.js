async function fetchUserInfo() {
  try {
    const response = fetch("http://localhost:3000/new", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("There was a problem fetching the user info", error);
  }
}
