const fs = require("fs");
const chalk = require("chalk");
const uniqid = require("uniqid");

function createUser(name, email, password) {
  const users = getUsers();
  const duplicateUser = users.find((user) => user.email === email);
  if (!duplicateUser) {
    users.push({
      id: uniqid(),
      name,
      email,
      password,
    });
    saveUsers(users);
    console.log(chalk.green("User has been created!"));
  } else {
    console.log(chalk.red("Email already exists!"));
  }
}

function deleteUser(id) {
  const users = getUsers();
  const usersToKeep = users.filter((user) => user.id !== id);
  if (users.length > usersToKeep.length) {
    saveUsers(usersToKeep);
    console.log(chalk.green("User has been deleted"));
  } else {
    console.log(chalk.red("User not found"));
  }
}

function updateUser(id, name, email, password) {
  const users = getUsers();
  const updatedUsers = users.map((user) => {
    if (user.id !== id) {
      return user;
    }
    return {
      id: user.id,
      name: name ? name : user.name,
      email: email ? email : user.email,
      password: password ? password : user.password,
    };
  });

  saveUsers(updatedUsers);
}

function usersList(id) {
  const users = getUsers();
  const findUser = users.find((user) => user.id === id);
  console.log(findUser);
}

function getUsers() {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}

function saveUsers(users) {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
}

module.exports = {
  createUser,
  deleteUser,
  usersList,
  updateUser,
};
