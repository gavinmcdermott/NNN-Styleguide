'use strict';

angular.module('NNN', [
  'NNN.Auth',
  'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('signup/dogs');

  $stateProvider
  .state('signupDogs', {
    url:'/signup/dogs',
    templateUrl: 'app/auth/tmpl/signup-dogs.html',
  })
  .state('signupMeals', {
    url:'/signup/meals',
    templateUrl: 'app/auth/tmpl/signup-meals.html',
  })
  .state('signupDelivery', {
    url:'/signup/delivery',
    templateUrl: 'app/auth/tmpl/signup-delivery.html',
  })
  .state('signupConfirm', {
    url:'/signup/confirm',
    templateUrl: 'app/auth/tmpl/signup-confirm.html',
  })
  .state('signupPayment', {
    url:'/signup/payment',
    templateUrl: 'app/auth/tmpl/signup-payment.html',
  })
  // .state('boards', {
  //   url:'/boards',
  //   templateUrl: 'app/boards/boards-mdv.tmpl.html',
  //   controller: 'BoardsCtrl',
  //   controllerAs: 'ctrl',
  //   resolve: {
  //     'currentUser': ['Auth', function (Auth) {
  //       return Auth.$requireAuth();
  //     }]
  //   }
  // })
  // .state('notes', {
  //   url:'/boards/:boardId/notes',
  //   templateUrl: 'app/notes/notes-mdv.tmpl.html',
  //   controller: 'NotesCtrl',
  //   controllerAs: 'ctrl',
  //   resolve: {
  //     'currentUser': ['Auth', function (Auth) {
  //       return Auth.$requireAuth();
  //     }]
  //   }
  // });
})

.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    event.preventDefault();
    if (error === 'AUTH_REQUIRED') {
      // $state.go('login');
    }
  });
});
