const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Hasan-Al-Shabbir",
    email: "hasanalshabbir257@gmail.com",
  },

  {
    id: uuidv4(),
    username: "Sumaiya Siddiqa Jui",
    email: "juirahman17301@gmail.com",
  },
];

module.exports = users;
