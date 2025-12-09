import express from "express";
import fs from "fs";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();
app.use(cors());
app.use(bodyParser.json());


const usersFile = path.resolve("./backend/users.json");


// Read users
function loadUsers() {
const data = fs.readFileSync(usersFile);
return JSON.parse(data);
}


// Save users
function saveUsers(users) {
fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}


// REGISTER
app.post("/register", (req, res) => {
const { username, email, password } = req.body;
let users = loadUsers();


const exists = users.find(u => u.username === username);
if (exists)
return res.json({ success: false, message: "Username already exists" });


users.push({ username, email, password });
saveUsers(users);


res.json({ success: true });
});


// LOGIN
app.post("/login", (req, res) => {
const { username, password } = req.body;
const users = loadUsers();


const user = users.find(u => u.username === username && u.password === password);


if (!user)
return res.json({ success: false, message: "Invalid login" });


res.json({ success: true });
});


app.listen(3000, () => console.log("Server running on http://localhost:3000"));
