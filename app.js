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
      //this.celsius = (this.fahrenheit - 32) * (5/9);
      //this.celsius = curl https://api.keyvalue.xyz/a17766c6/myKey;
      const Http = new XMLHttpRequest();
      const url='https://jsonplaceholder.typicode.com/posts';
      Http.open("GET", url);
      Http.send();
      Http.onreadystatechange=(e)=>{
          this.celsius = Http.responseText;
      }
    }
  
  }

})();
