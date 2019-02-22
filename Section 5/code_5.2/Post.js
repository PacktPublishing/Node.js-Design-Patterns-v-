const Command = require("./Command");

class Post extends Command {
  constructor(title, content) {
    super();
    this.title = title;
    this.content = content;
    this.id = new Date().getTime();
  }
  execute(db) {
    db.push({
      title: this.title,
      content: this.content,
      timestamp: new Date().toISOString(),
      id: this.id
    });
  }
  undo(db) {
    db.remove(this.id);
  }
}

module.exports = Post;
