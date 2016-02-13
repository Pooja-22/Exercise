/**
 * Created by pooja on 13/2/16.
 */

Ooj.config(['$stateProvider', '$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('closures', {
            url: '/closures',
            templateUrl: 'Views/Closures.html',
            controller:'ClosuresController'

        })

        .state('events', {
            url: '/events',
            templateUrl: 'Views/Events.html',
            controller:'EventsController'

        })

        .state('hoisting', {
            url: '/hoisting',
            templateUrl: 'Views/Hoisting.html',
            controller:'HoistingController'
        })

        .state('inheritance', {
            url: '/inheritance',
            templateUrl: 'Views/Inheritance.html',
            controller:'InheritanceController'


        })

        .state('this', {
            url: '/new&this',
            templateUrl: 'Views/This.html',
            controller:'ThisController'

        })

        .state('objects', {
            url: '/objects',
            templateUrl: 'Views/Objects.html',
            controller: 'ObjectsController'
        })

        .state('timerFunctions', {
            url: '/timerFunctions',
            templateUrl: 'Views/TimerFunctions.html',
            controller:'TimerFunctionsController'


        })

        .state('binding', {
            url: '/binding',
            templateUrl: 'Views/Binding.html',
            //controller:'BindingController'

        })

        .state('binding.bind', {
            url: '/bind',
            templateUrl: 'Views/Binding-Bind.html'
        })

        .state('binding.call', {
            url: '/call',
            templateUrl: 'Views/Binding-Call.html'
        })

        .state('binding.apply', {
            url: '/apply',
            templateUrl: 'Views/Binding-Apply.html'
        })




}]);