const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button class="button1" onclick='showWelcome()'>Log In</button></p>
    <p><button class="button3" onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
      <div class='register-container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button class="button2">Register</button>
    <button class="button4" onclick='showLogin()'> Already have an account?</button></p>
    </div>
    `
    root.innerHTML = str
}
const showWelcome = () => {
    let str=`
    <div class='Welcome-container'>
    <h2> welcome!</h2>
    </div>
    `
    root.innerHTML = str

}
