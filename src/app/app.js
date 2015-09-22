'use strict';

angular.module('NNN', [
  'NNN.Modules',
  'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/guide/grid');

  $stateProvider
  .state('guide', {
    url:'/guide',
    abstract: true,
    templateUrl: 'app/modules/tmpl/guide.html',
  })
  .state('guide.grid', {
    url:'/grid',
    templateUrl: 'app/modules/tmpl/grid.html'
  })
  .state('guide.nav', {
    url:'/nav',
    templateUrl: 'app/modules/tmpl/nav.html'
  })
  .state('guide.lists-tiles', {
    url:'/lists-tiles',
    templateUrl: 'app/modules/tmpl/lists-tiles.html'
  })
  .state('guide.sections-panels', {
    url:'/sections-panels',
    templateUrl: 'app/modules/tmpl/sections-panels.html'
  })
  .state('guide.forms', {
    url:'/forms',
    templateUrl: 'app/modules/tmpl/forms.html'
  })
  .state('guide.notices', {
    url:'/notices',
    templateUrl: 'app/modules/tmpl/notices.html'
  })
  .state('guide.utils', {
    url:'/utils',
    templateUrl: 'app/modules/tmpl/utils.html'
  })
  .state('guide.themes', {
    url:'/themes',
    templateUrl: 'app/modules/tmpl/themes.html'
  })
  .state('guide.icons', {
    url:'/icons',
    templateUrl: 'app/modules/tmpl/icons.html'
  })
  .state('guide.typography', {
    url:'/typography',
    templateUrl: 'app/modules/tmpl/typography.html'
  });
})

.controller('MainCtrl', function ($state, $scope) {


})

.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    event.preventDefault();
    if (error === 'AUTH_REQUIRED') {
      // $state.go('login');
    }
  });
});
