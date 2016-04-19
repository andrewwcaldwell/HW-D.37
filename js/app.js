/// MUST RUN PYTHON FROM PUBLIC DIRECTORY w/ TERMINAL
/// Run : python -m SimpleHTTPServer
/// In Browser set address to: localhost:8000

/// Instantiate Angular - String Matches HTML 'ng-app'
var mainApp = angular.module('MarvelApp', []);

/// MARVEL API - Characters + MyKey
var requestUrl = 'http://gateway.marvel.com:80/v1/public/characters?limit=5&apikey=50f1baf21e1535c08fef3b992e928123';

/// Start Working on Stuff - String matches HTML 'ng-controller'
mainApp.controller('MController1', function ($scope, $http) {
    $scope.person = {
        name: ' Caldwell',
        age: ' This Many *hand gestures*',
    };
    
    $scope.heroes = [];
    $scope.findem = '';
    $scope.viewDetail = function() {
        console.log("what the F do you want??");
    }
    
    $http({
        method: 'get',
        url: requestUrl,
    }).then(function (response) {
        console.log(response.data.data.results);
        $scope.heroes = response.data.data.results;
    });
});



/// if Using Modules:
var secondary = require('./secondary');
secondary(mainApp);