const users = require("../../dbClients/usersDB");

describe("CRUD /users", () => {
  it("should get list of users and respond with 200", () => {
    const result = [
      {
        email: "dwinatech@hotmail.com",
        full_name: "Mohammed Dwina",
        password: "1234",
        user_id: 1
      },
      {
        email: "khaled@hotmail.com",
        full_name: "Khaled",
        password: "1234",
        user_id: 2
      },

      {
        email: "jason@hotmail.com",
        full_name: "Jason",
        password: "1234",
        user_id: 3
      },
      {
        email: "won@hotmail.com",
        full_name: "Won",
        password: "1234",
        user_id: 4
      }
    ];
    users.getUsers().then(response => {
      expect(response).toEqual(result);
    });
  });

  it("should add new user and return number of inserted row", () => {
    const data = {
      fullName: "Mohammed Dwina",
      email: "dwinatech@hotmail.com",
      password: 1234
    };
    users.addUser(data).then(response => {
      expect(response.rowCount).toEqual(1);
    });
  });

  it("should edit user and return number of edited row", async () => {
    const data = {
      userId: 3,
      fullName: "Mohammed Dwina",
      emaill: "dwinatech@hotmail.com",
      password: 12345
    };
    users.editUser(data).then(response => {
      expect(response).toEqual(1);
    });
  });

  it("should delete user and return number of deleted row", async () => {
    const userId = 4;
    users.deleteUser(userId).then(response => {
      expect(response).toEqual(1);
    });
  });
});
