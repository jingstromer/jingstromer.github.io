(function(){
var app = angular.module('jirApp', []);

app.controller('JirController', function() {
  this.product = degreeCalculator;
});

var degreeCalculator = {
  fahrenheit: 3.24,
}

})();
