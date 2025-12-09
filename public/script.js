const API = "http://localhost:3000";
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data)
});


const json = await res.json();
if (json.success) window.location.href = "dashboard.html";
else alert(json.message);
});
}
```javascript
const API = "http://localhost:3000";


// REGISTER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
registerForm.addEventListener("submit", async e => {
e.preventDefault();


const data = {
username: document.getElementById("username").value,
email: document.getElementById("email").value,
password: document.getElementById("password").value
};


const res = await fetch(API + "/register", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data)
});


const json = await res.json();
alert(json.success ? "Registration successful" : json.message);
});
}


// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
loginForm.addEventListener("submit", async e => {
e.preventDefault();


const data = {
username: document.getElementById("username").value,
password: document.getElementById("password").value
};


const res = await fetch(API + "/login", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(data)
});


const json = await res.json();
alert(json.success ? "Login successful" : json.message);
});
}