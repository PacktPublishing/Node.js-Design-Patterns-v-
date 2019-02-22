const Scores = require('./Scoreboard');
// const Scores = new ScoreBoard();

class Game {
  join(player) {
    Scores.join(player.getName());
  }
  scores() {
    return Scores.getBoard();
  }
  getWinner() {
    return Scores.sort()[0];
  }
}

module.exports = Game;