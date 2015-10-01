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
  .state('guide.lists', {
    url:'/lists',
    templateUrl: 'app/modules/tmpl/lists.html'
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
  .state('guide.priorities', {
    url:'/priorities',
    templateUrl: 'app/modules/tmpl/priorities.html'
  })
  .state('guide.icons', {
    url:'/icons',
    templateUrl: 'app/modules/tmpl/icons.html'
  })
  .state('guide.typography', {
    url:'/typography',
    templateUrl: 'app/modules/tmpl/typography.html'
  });


  $stateProvider
  .state('demo', {
    url:'/demo',
    templateUrl: 'app/demo/tmpl/demo-index.html',
  })
  .state('dog', {
    url:'/dog',
    abstract: true,
    templateUrl: 'app/demo/tmpl/dog.html'
  })
  .state('dog.meals', {
    url:'/meals',
    templateUrl: 'app/demo/tmpl/dog-meals.html'
  })
  .state('dog.info', {
    url:'/info',
    templateUrl: 'app/demo/tmpl/dog-info.html'
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
