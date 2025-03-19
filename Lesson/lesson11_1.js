//Exercise 1
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data.name, data.email))
.catch(error => console.error("Error fetching data:", error));

