const { faker } = require("@faker-js/faker");
const fs = require("fs");

faker.locale = "vi";

(() => {
  const userList = [];

  for (let i = 0; i < 30; i++) {
    const user = {
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      city: faker.address.cityName(),
      status: true,
      createdAt: Date.now(),
    };
    userList.push(user);
  }
  const db = {
    users: userList,
  };

  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Generate data successfully =))");
  });
})();
