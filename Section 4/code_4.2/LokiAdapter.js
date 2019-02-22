class LokiAdapter {
  constructor(lokiDb) {
    this.lokiDb = lokiDb;
    this.collection = null;
    this.op = null;
  }
  defaults(obj) {
    this.collection = Object.keys(obj)[0];
    this.op = "INIT";
    return this;
  }
  get(collection) {
    this.collection = this.lokiDb.getCollection(collection);
    return this;
  }
  push(data) {
    this.dataToPush = data;
    this.op = "WRITE";
    return this;
  }
  value() {
    return this.collection.find();
  }
  write() {
    if (this.op) {
      switch (this.op) {
        case "INIT":
          this.lokiDb.addCollection(this.collection);
          this.collection = null;
          this.op = null;
          break;
        case "WRITE":
          this.collection.insert(this.dataToPush);
          this.dataToPush = null;
          this.collection = null;
          this.op = null;
          break;
      }

      this.lokiDb.saveDatabase();
    }

    return this;
  }
}

module.exports = LokiAdapter;