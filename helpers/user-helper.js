var db = require("../config/database-connection");

module.exports = {
  isUser: async (email) => {
    var memberEmail = { Email: email };
    const filteredDocs = await db
      .get()
      .collection("user")
      .find(memberEmail)
      .toArray();

    if (filteredDocs[0] === undefined) {
      console.log("its null");
      return "not a user";
    } else {
      console.log("its not null");
      return "user";
    }
  },
  addUser: async (email) => {
    var member = { Email: email, verification: "false" };
    const insertResult = await db.get().collection("user").insertOne(member);
    console.log(" Data Inserted!" + insertResult);
    return "inserted";
  },
};
