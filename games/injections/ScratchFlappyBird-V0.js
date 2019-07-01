(function() {
  var gameOver = false;
  window.muniverse = {
    init: function() {
      return pollAndWait(2000, function() {
        return false;
      }).then(function() {
        faketime.pause();
      });
    },
    step: function(millis) {
      faketime.advance(millis);
      return Promise.resolve(gameOver);
    },
    score: function() {
      var score = $(".monitor_value_3Yexa").textContent*1;
      return Promise.resolve(score);
    }
  };

})();
