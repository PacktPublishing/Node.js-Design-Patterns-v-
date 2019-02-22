const User = require('./User');
const UserPref = require('./UserPref');

class Signup {
  async create({
    name,
    email,
    age,
    photo,
    nickname,
    favoriteTopics,
    isSME,
    isModerator,
    isAdmin
  }) {
    const newUser = await new User(name, email, age, photo);
    await new UserPref(newUser, nickname, favoriteTopics, isSME, isModerator, isAdmin);
  }
}

module.exports = new Signup();