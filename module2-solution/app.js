(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyList();

  toBuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyList = [
    {
      name: 'cookies',
      quantity: 10
    },
    {
      name: 'noodles',
      quantity: 5
    },
    {
      name: 'cokes',
      quantity: 3
    },
    {
      name: 'cheetos',
      quantity: 5
    },
    {
      name: 'nutellas',
      quantity: 3
    }
  ];
  var alreadyBoughtList = [];

  service.buyItem = function (index) {
    alreadyBoughtList.push(toBuyList[index]);
    toBuyList.splice(index, 1);
  };

  service.getToBuyList = function () {
    return toBuyList;
  };

  service.getAlreadyBoughtList = function () {
    return alreadyBoughtList;
  };
}

})();