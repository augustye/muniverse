(function() {
  var gameOver = false;
  window.muniverse = {
    init: function() {
      return setTimeout(faketime.pause, 2000);
    },
    step: function(millis) {
      faketime.advance(millis);
      return Promise.resolve(gameOver);
    },
    score: function() {
      return Promise.resolve(3);
    }
  };

})();
