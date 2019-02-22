const Topic = require("./Topic");
const User = require("./User");
const Store = require("./Store");

const John = new User("John Doe");
const Mike = new User("Michael Williams");

const NodeJS = new Topic("Node.js");
const ReactJS = new Topic("React.js");

NodeJS.subscribe(John);
NodeJS.subscribe(Mike);
ReactJS.subscribe(Mike);

NodeJS.add("A brand new version of Node.js is out!!");
ReactJS.add("React introduces Hooks");
