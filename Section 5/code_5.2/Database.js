const { join } = require("path");
const loki = require("lokijs");
const dbs = new loki(join(__dirname, "dbs.json"));
dbs.addCollection("posts");

class Database {
  constructor(db) {
    this.db = db;
  }
  getPost(obj = {}) {
    return this.db.getCollection("posts").find(obj);
  }
  push(obj) {
    this.db.getCollection("posts").insert(obj);
    this.db.saveDatabase();
  }
  remove(id) {
    this.db.getCollection("posts").findAndRemove({ id });
    this.db.saveDatabase();
  }
  update(title, content) {
    this.db
      .getCollection("posts")
      .findAndUpdate({ title }, obj => (obj.content = content));
    this.db.saveDatabase();
  }
}

module.exports = new Database(dbs);
