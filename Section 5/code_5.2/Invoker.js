class Invoker {
  constructor(db) {
    this.stack = [];
    this.db = db;
  }
  execute(command) {
    this.stack.push(command);
    command.execute(this.db);
  }
  undo() {
    const lastCommand = this.stack.pop();
    if (lastCommand) lastCommand.undo(this.db);
  }
}

module.exports = Invoker;
