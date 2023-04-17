const usersList = document.getElementById("users_list");
const loader = document.getElementById("loader");
// const register_btn = document.getElementById("register_btn");
// let isClicked = false;

// register_btn.addEventListener("click", () => {
//   register_btn.setAttribute("disabled", "disabled");
//   register_btn.innerHTML = `
//   <div class="spinner-border text-light" role="status">`;
//   isClicked = true;

//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST", // *GET, POST, PUT, DELETE, OPTIONS
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   })
//     .then((response) => response.json())
//     .then((json) => register_btn.removeAttribute("disabled"));
// });

const getUsers = async () => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET", // *GET, POST, PUT, DELETE, OPTIONS
    headers: {
      Authorization:
        "Bearer asdfasdfasdfhewur7832233.qrqwer2121qweqwer.331qweq",
      // "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   username: "admin",
    //   password: "osito123"
    // }),
  })
    .then((response) => response.json())
    .then((json) => setUsersInView(json));

  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const json = await response.json();
  // console.log("Con await", json);
};

const setUsersInView = (users) => {
  users.forEach((user, i) => {
    const userHtml = `
    <div class="card">
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.phone}</p>
      <button type="button" class="btn_profile">Show profile</button>
    </div>
    `;
    usersList.innerHTML += userHtml;
  });
  loader.style.display = "none";
};

getUsers();
