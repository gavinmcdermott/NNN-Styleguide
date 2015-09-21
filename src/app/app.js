'use strict';

angular.module('NNN', [
  'NNN.Account',
  'NNN.Auth',
  'NNN.Dogs',
  'NNN.Deliveries',
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


  .state('dogsList', {
    url:'/dogs',
    templateUrl: 'app/dogs/tmpl/dogs.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .state('dogNew', {
    url:'/dog/new',
    templateUrl: 'app/dogs/tmpl/dog-new.html',
  })
  .state('dog', {
    url:'/dogs/:dogId',
    templateUrl: 'app/dogs/tmpl/dog.html',
  })
  .state('dogMeals', {
    url:'/dogs/:dogId/meals',
    templateUrl: 'app/dogs/tmpl/dog-meals.html',
  })
  .state('dogEdit', {
    url:'/dogs/:dogId/edit',
    templateUrl: 'app/dogs/tmpl/dog-edit.html',
  })


  .state('deliveries', {
    url:'/deliveries',
    templateUrl: 'app/deliveries/tmpl/deliveries.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  }) 
  .state('deliveriesEdit', {
    url:'/deliveries/edit',
    templateUrl: 'app/deliveries/tmpl/deliveries-edit.html',
  }) 


  .state('account', {
    url:'/account',
    templateUrl: 'app/account/tmpl/account.html',
  })
  .state('account.payment', {
    url:'/payment',
    templateUrl: 'app/account/tmpl/account-payment.html',
  })
  
  .state('account.deliveries', {
    url:'/deliveries',
    templateUrl: 'app/account/tmpl/account-deliveries.html',
  })
  .state('account.deliveriesEdit', {
    url:'/deliveries/edit',
    templateUrl: 'app/account/tmpl/account-deliveries-edit.html',
  })

  .state('account.details', {
    url:'/details',
    templateUrl: 'app/account/tmpl/account-details.html',
  });


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

.controller('MainCtrl', function ($state, $scope) {
  var ctrl = this;
  var pauseOpen = false;

  $scope.openPause = function() {
    var el  = document.getElementById("panel");

    if (pauseOpen) {
      pauseOpen = false;
      el.classList.remove('active');
    } else {
      pauseOpen = true;
      el.classList.add('active');
    }
  };

})

.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    event.preventDefault();
    if (error === 'AUTH_REQUIRED') {
      // $state.go('login');
    }
  });
});
