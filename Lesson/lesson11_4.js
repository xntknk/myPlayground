async function getPost() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data.name, data.email);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getPost();
