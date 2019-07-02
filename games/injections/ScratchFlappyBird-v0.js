(function() {
  var gameOver = false;
  var monitor_class = "monitor_value_3Yexa";
  window.muniverse = {
    init: function() {
      return pollAndWait(5000, function() {
        return document.getElementsByClassName(monitor_class).length;
      }).then(function() {
        faketime.pause();
      });
    },
    step: function(millis) {
      faketime.advance(millis);
      return Promise.resolve(gameOver);
    },
    score: function() {
      var score = 0;
      if(document.getElementsByClassName(monitor_class).length)
      {
        score = document.getElementsByClassName(monitor_class)[0].textContent*1;
      }
      return Promise.resolve(score);
    }
  };

})();
