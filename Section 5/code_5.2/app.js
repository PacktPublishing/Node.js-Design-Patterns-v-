const Invoker = require("./Invoker");
const Db = require("./Database");
const Post = require("./Post");
const Update = require("./Update");
const View = require("./View");

const Blog = new Invoker(Db);

Blog.execute(
  new Post("My First Post", "Hello everyone, this is my first post!")
);
Blog.execute(
  new Post(
    "About Design Patterns",
    "So, I'm building a course on design patterns for Node.js"
  )
);
Blog.execute(new View());
