class UserPref {
  constructor(
    userId,
    nickname,
    favouriteTopics,
    isSME,
    isModerator,
    isAdmin
  ) {
    return new Promise((resolve, reject) => {
      this.userId = userId;

      if (nickname) {
        this._setNickname(nickname);
      }

      if (favouriteTopics) {
        this._favTopics(favouriteTopics);
      }

      if (isSME) {
        this._setSME(isSME);
      }

      if (isModerator) {
        this._isModerator(isModerator);
      }

      if (isAdmin) {
        this._isAdmin(isAdmin);
      }

      resolve(true);
    });
  }
  _setNickname(nickname) {
    console.log(`- Nickname (${nickname}) set...`);
  }
  _favTopics(topics) {
    console.log(`- User favourite topics (${topics.join(',')}) subscribed!`);
  }
  _setSME(topics) {
    if (topics) {
      console.log(`- User is now an SME for ${topics.join(',')}...`);
    }
  }
  _isModerator(opt) {
    if (opt) {
      console.log(`- User registered as a Moderator!`);
    }
  }
  _isAdmin() {
    console.log('- User is now an Administrator!');
  }
}

module.exports = UserPref;