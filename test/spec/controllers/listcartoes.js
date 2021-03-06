'use strict';

describe('Controller: ListcartoesCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var ListcartoesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListcartoesCtrl = $controller('ListcartoesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListcartoesCtrl.awesomeThings.length).toBe(3);
  });
});
