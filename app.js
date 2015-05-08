(function(){
  var app = angular.module('jirApp', []);

  app.controller('JirController', function() {
    this.fcCalc = fcCalculator;
  });

  var fcCalculator = {
    celsius: 0,
    fahrenheit: 32,
  
    fCalc: function () {
      this.fahrenheit = 32 + (9/5) * this.celsius;
    },
    
     cCalc: function () {
      this.celsius = (this.fahrenheit - 32) * (5/9);
    }
  
  }

})();
