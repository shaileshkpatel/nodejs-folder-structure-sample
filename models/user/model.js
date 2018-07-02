class UserModel {
  constructor() {}

  getAllUsers() {
    return [{ Name: "Shailesh" }, { Name: "Rajan" }, { Name: "Rojan" }];
  }
}

module.exports = new UserModel();