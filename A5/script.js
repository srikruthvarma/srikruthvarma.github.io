const users = [];
let user = {};

const showMenu = () => {
  return `
    <div class="menu-bar">
      <a href="#" onclick="showHome()">Home</a>
      <a href="#" onclick="showContact()">Contact</a>
      <a href="#" onclick="showLogin()">Logout</a>
    </div>
  `;
};

const showLogin = () => {
  let str = `
    <div class="App-Container">
      <h1>Login Form</h1>
      <p><div id="dvMsg" style="color: red;"></div></p>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPass" placeholder="Password"></p>
      <p><button onclick='validateUser()'>Log In</button></p>
      <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
  `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <div class="App-Container">
      <h1>Register Form</h1>
      <p><input type="text" id="txtName" placeholder="Name"></p>
      <p><input type="text" id="txtEmail" placeholder="Email"></p>
      <p><input type="password" id="txtPass" placeholder="Password"></p>
      <button onclick='addUser()'>Register</button>
      <hr>
      <button onclick='showLogin()'>Already a Member? Login here...</button>
    </div>
  `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    ${showMenu()}
    <div class="App-Container">
      <h1>Welcome, ${user.name}!</h1>
      <p>This is your Home Page.</p>
      <button onclick="showLogin()">Logout</button>
    </div>
  `;
  root.innerHTML = str;
};

const showContact = () => {
  let str = `
    ${showMenu()}
    <div class="App-Container">
      <h1>Contact Us</h1>
      <p><strong>Email:</strong> srikruthvarma@gmail.com.</p>
      <p><strong>Phone:</strong> 9100053005</p>
      <p><strong>Address:</strong> opp to tech mahindra Hyderabad, India</p>
    </div>
  `;
  root.innerHTML = str;
};

const addUser = () => {
  const obj = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value
  };
  users.push(obj);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;

  user = users.find((e) => e.email === email && e.pass === pass);

  if (user) {
    showHome();
  } else {
    document.getElementById("dvMsg").innerText = "Access Denied";
  }
};
