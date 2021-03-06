'use strict';

/**
 * @ngdoc overview
 * @name controleAcessoAppApp
 * @description
 * # controleAcessoAppApp
 *
 * Main module of the application.
 */
angular
  .module('controleAcessoAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/visualizaacessos.html',
        controller: 'VisualizaacessosCtrl',
        controllerAs: 'visualizaacessos'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pessoa', {
        templateUrl: 'views/listPessoa.html',
        controller: 'PessoaCtrl',
        controllerAs: 'pessoa'
      })
      .when('/pessoaEditAdd', {
        templateUrl: 'views/pessoaadd.html',
        controller: 'PessoaeditaddCtrl',
        controllerAs: 'pessoaEditAdd'
      })
      .when('/pessoaEdit', {
        templateUrl: 'views/pessoaedit.html',
        controller: 'PessoaeditCtrl',
        controllerAs: 'pessoaEdit'
      })
      .when('/listCartoes', {
        templateUrl: 'views/listcartoes.html',
        controller: 'ListcartoesCtrl',
        controllerAs: 'listCartoes'
      })
      .when('/addCartao', {
        templateUrl: 'views/addcartao.html',
        controller: 'AddcartaoCtrl',
        controllerAs: 'addCartao'
      })
      .when('/editCartao', {
        templateUrl: 'views/editcartao.html',
        controller: 'EditcartaoCtrl',
        controllerAs: 'editCartao'
      })
      .when('/cartoesPessoa', {
        templateUrl: 'views/cartoespessoa.html',
        controller: 'CartoespessoaCtrl',
        controllerAs: 'cartoesPessoa'
      })
      .when('/visualizaAcessos', {
        templateUrl: 'views/visualizaacessos.html',
        controller: 'VisualizaacessosCtrl',
        controllerAs: 'visualizaAcessos'
      })
      .when('/pesquisaAcessos', {
        templateUrl: 'views/pesquisaacessos.html',
        controller: 'PesquisaacessosCtrl',
        controllerAs: 'pesquisaAcessos'
      })
      .when('/graficoAcessoHora', {
        templateUrl: 'views/graficoacessohora.html',
        controller: 'GraficoacessohoraCtrl',
        controllerAs: 'graficoAcessoHora'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope){
    var BASE_URL = "http://localhost:8888";
    $rootScope.urls = {
        cartao : BASE_URL + "/cartao",
        pessoa : BASE_URL + "/pessoa",
        acesso : BASE_URL + "/acesso"
    };
  });
