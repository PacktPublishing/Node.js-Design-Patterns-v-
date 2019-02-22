const Command = require("./Command");

class Update extends Command {
  constructor(title, content) {
    super();
    this.title = title;
    this.content = content;
    this.oldPost = "";
  }
  execute(db) {
    const getOld = db.getPost({ title: this.title });
    if (getOld.length === 0) {
      console.log("UPDATE FAILED: Post not found!");
    } else {
      this.oldPost = getOld[0].content;
      this.update(db);
    }
  }
  update(db) {
    db.update(this.title, this.content);
  }
  undo(db) {
    db.update(this.title, this.oldPost);
  }
}

module.exports = Update;
