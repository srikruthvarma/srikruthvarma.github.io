const users = [];
let user={}
const showLogin = () => {
  let str = `
    <div>
    <h1>Login Form</h1>
    <p><div id="dvMsg"></div></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick='validateUser()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button onclick='addUser()'>Register</button>
    <hr>
    <button onClick='showLogin()'>Alread a Member? Login here...</button>
    `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p><select id="actionSelect">
     <option value=0>--select--</option>
      <option value=1>Deposit</option>
      <option value=2>Withdraw</option>
      </select></p>
      <p>
      <input type='number' id='txtAmount'>
      </p>
      <p><button onclick="handleTransaction()">Submit</button>
      </p>

    <button onclick='showLogin()'>Logout</button>
    <hr>
    <p>Current balance:${user.balance}</p>
    `;
  root.innerHTML = str;
};

const addUser = () => {
  const obj = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance:0
  };
  users.push(obj);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
   user = users.find(
    (e) => e.email === email && e.pass === pass
  )
  if (user) {
    showHome();
  } else {
    dvMsg.innerHTML = "Access Denied";
  }
};

const handleTransaction = () => {
  const action = document.getElementById("actionSelect").value;
  const amount = Number(document.getElementById("txtAmount").value);

  if (action === "1") {
    user.balance += amount;

  } else if (action === "2") {
    if (amount > user.balance) {
      alert("insufficient balance");
      return;
    }
    user.balance -= amount;

  //  }else if (action === "3") {
  //     if (amount > user.balance) {
  //       alert("insuffecient balance!");
  //       return;
  //     }

    }
  showHome();
};

// const toggleTransfer = () => {
//   const action = document.getElementById("actionSelect").value;
//   const transferFund = document.getElementById("transferFund");
//   if (action ==="3") {}
// }
