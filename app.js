(function(){
  var app = angular.module('jirApp', []);

  app.controller('JirController', function() {
    this.fCalc = fCalculator;
  });

  var fCalculator = {
    calc: function (celsius) {
      return 32 + (9/5) * celsius;
    }
  }

})();
