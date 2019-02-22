class Db {
  constructor(db) {
    this.db = db;
  }
  init(collection) {
    return this.db.defaults({ [collection]: [] }).write();
  }
  add({ collection, data }) {
    return this.db
      .get(collection)
      .push(data)
      .write();
  }
  get(collection) {
    return this.db.get(collection).value();
  }
}

module.exports = Db;
