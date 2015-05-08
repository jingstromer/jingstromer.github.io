(function(){
  var app = angular.module('jirApp', []);

  app.controller('JirController', function() {
    this.fcCalc = fcCalculator;
  });

  var fcCalculator = {
    celsius: 0,
    fahrenheit: 0,
  
    fCalc: function () {
      this.fahrenheit = 32 + (9/5) * this.celsius;
      return this.fahrenheit;
    },
    
     cCalc: function () {
      cesius = (fahrenheit - 32) * (5/9);
      return celsius;
    }
  
  }

})();
