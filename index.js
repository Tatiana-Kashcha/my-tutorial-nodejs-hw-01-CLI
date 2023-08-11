// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1DEXoP8AuCGYc1YgoQ6hw" });
// invokeAction({ action: "add", name: "name", email: "email", phone: "phone" });
// invokeAction({ action: "remove", id: "OXXipXxa3wrOQ2ONZm0TV" });
// invokeAction({ action: "get", id: "OXXipXxa3wrOQ2ONZm0TV" });

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// console.log(argv);
// invokeAction(argv);
