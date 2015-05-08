(function(){
  var app = angular.module('jirApp', []);

  app.controller('JirController', function() {
    this.fcCalc = fcCalculator;
  });

  var fcCalculator = {
    celsius: 0,
    fahrenheit: 0,
  
    fCalc: function () {
      //fahrenheit = 32 + (9/5) * celsius;
      //return fahrenheit;
      return 3.13;
    },
    
     cCalc: function () {
      cesius = (fahrenheit - 32) * (5/9);
      return celsius;
    }
  
  }

})();
