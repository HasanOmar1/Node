const yargs = require("yargs");
const user = require("./functions");

yargs.command({
  command: "create",
  describe: "Creates new user",
  builder: {
    name: {
      describe: "User name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: true,
      type: "string",
    },
    password: {
      describe: `User Password`,
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    user.createUser(argv.name, argv.email, argv.password);
  },
});

yargs.command({
  command: "delete",
  describe: "Deletes a user",
  builder: {
    id: {
      describe: "User's ID",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    user.deleteUser(argv.id);
  },
});

yargs.command({
  command: "update",
  describe: "Updates user info",
  builder: {
    id: {
      describe: "User's ID",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "User name",
      demandOption: false,
      type: "string",
    },
    email: {
      describe: "User email",
      demandOption: false,
      type: "string",
    },
    password: {
      describe: `User Password`,
      demandOption: false,
      type: "string",
    },
  },
  handler(argv) {
    user.updateUser(argv.id, argv.name, argv.email, argv.password);
  },
});

yargs.command({
  command: "read",
  describe: "Users list",
  builder: {
    id: {
      describe: "User's ID",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    user.usersList(argv.id);
  },
});

yargs.parse();
