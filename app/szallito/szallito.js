angular.module('myApp.szallito', [])

    .config(function ($stateProvider) {
        $stateProvider
            .state('szallito', {
                url: '/szallito',
                templateUrl: 'szallito/szallito.html',
                controller: 'SzallitoCtrl',
                resolve: {
                    naplo: function ($http) {
                        return $http.get('http://localhost:3000/naplo');
                    }
                }
            })
    })