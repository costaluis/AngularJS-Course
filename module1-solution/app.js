(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.textItems = "";
  $scope.lunchStatus = "";
  $scope.colorStatus = "";

  $scope.displayLunchStatus = function () {
    var checkReturn = checkLunch($scope.textItems);

    $scope.lunchStatus = checkReturn.msg;
    $scope.colorStatus = checkReturn.color;
  }


  function checkLunch(textItems) {
    var lunchStatusValue = "";
    var colorStatusValue = "";

    if (textItems == "") {
      lunchStatusValue = "Please enter data first";
      colorStatusValue = "red";
    } else {
      colorStatusValue = "green";
      var items = textItems.split(",");
      var numItems = 0;
      for (var i=0; i<items.length; i++) {
        if (items[i] !== "") {
          numItems++;
        }
      }
      if (numItems <= 3) {
        lunchStatusValue = "Enjoy!";
      } else {
        lunchStatusValue = "Too much!";
      }
    }

    return  {
              msg: lunchStatusValue, 
              color: colorStatusValue
            }
  }
}
})();