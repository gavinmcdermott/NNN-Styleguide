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

  .state('signup', {
    url:'/signup',
    abstract: true,
    templateUrl: 'app/demo/tmpl/signup.html'
  })
  .state('signup.1', {
    url:'/1',
    templateUrl: 'app/demo/tmpl/signup1.html'
  })
  .state('signup.2', {
    url:'/2',
    templateUrl: 'app/demo/tmpl/signup2.html'
  })
  .state('signup.3', {
    url:'/3',
    templateUrl: 'app/demo/tmpl/signup3.html'
  })
  .state('signup.4', {
    url:'/4',
    templateUrl: 'app/demo/tmpl/signup4.html'
  })
  .state('signup.fast', {
    url:'/fast',
    templateUrl: 'app/demo/tmpl/signup-fast.html'
  })




  .state('main', {
    url:'/main',
    abstract: true,
    templateUrl: 'app/demo/tmpl/main.html'
  })
  .state('main.dog', {
    url:'/dog',
    templateUrl: 'app/demo/tmpl/main-dog.html'
  })




  .state('main.account', {
    url:'/account',
    abstract: true,
    templateUrl: 'app/demo/tmpl/main-account.html'
  })
  .state('main.account.delivery', {
    url:'/delivery',
    templateUrl: 'app/demo/tmpl/main-account-delivery.html'
  })
  .state('main.account.password', {
    url:'/password',
    templateUrl: 'app/demo/tmpl/main-account-password.html'
  })
  .state('main.account.subscription', {
    url:'/subscription',
    templateUrl: 'app/demo/tmpl/main-account-subscription.html'
  })





  .state('dog', {
    url:'/dog',
    abstract: true,
    controller: 'MainCtrl',
    controllerAs: 'main',
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
  var ctrl = this;
  var pauseOpen = false;
  $scope.paused = false;

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

  $scope.pauseThings = function() {
    var el  = document.getElementById("panel");
    var elWarn  = document.getElementById("warn");
    elWarn.classList.add('active');
    el.classList.remove('active');
    $scope.paused = true;
  };

  $scope.stopPause = function() {
    var elWarn  = document.getElementById("warn");
    elWarn.classList.remove('active');
    $scope.paused = false;
  };

  $scope.showChange = function() {
    var el  = document.getElementById("meal");
    el.classList.add('active');
  };

  var AAAon = false;
  var BBBon = false;

  $scope.toggleChangeSchedAAA = function() {
    var el  = document.getElementById("AAA");
    console.log('AAA');
    if (AAAon) {
      AAAon = false;
      el.classList.remove('active');
    } else {
      AAAon = true;
      el.classList.add('active');
    }
  };

  $scope.toggleChangeSchedBBB = function() {
    var el  = document.getElementById("BBB");
    if (BBBon) {
      BBBon = false;
      el.classList.remove('active');
    } else {
      BBBon = true;
      el.classList.add('active');
    }
  };

})

.run(function ($rootScope, $state) {

  $rootScope.$state = $state;

  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    event.preventDefault();
    if (error === 'AUTH_REQUIRED') {
      // $state.go('login');
    }
  });
});
