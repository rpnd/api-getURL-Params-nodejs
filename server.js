const http = require("http");
const url = require("url");

let database = {
  users: [
    { id: 1, username: "reza", email: "reza@gmail.com", password: "881231" },
    { id: 2, username: "ali", email: "ali@gmail.com", password: "661231" },
    { id: 4, username: "leyla", email: "leyla@gmail.com", password: "001231" },
  ],
  courses: [
    { id: 1, title: "react.js", price: "1-2000-00" },
    { id: 2, title: "javascript", price: "500-000" },
    { id: 3, title: "node.js", price: "200-000" },
  ],
};

const server = http
  .createServer((req, res) => {
    const queryStrings = url.parse(req.url, true).query;

    console.log(queryStrings);

    if (req.url === "/api/users") {
      let users = database.users;
      res.write(JSON.stringify(users));
      res.end();
    } else if (req.url === "/api/courses") {
      let courses = database.courses;
      res.write(JSON.stringify(courses));
      res.end();
    } else {
      res.write("EROORRRRRRRRRRRRRR");
      res.end();
    }
  })
  .listen(3000);
