/// MUST RUN PYTHON FROM PUBLIC DIRECTORY w/ TERMINAL
/// Run : python -m SimpleHTTPServer
/// In Browser set address to: localhost:8000

/// Instantiate Angular - String Matches HTML 'ng-app'
var mainApp = angular.module('MarvelApp', []);

/// MARVEL API - Characters + MyKey
var requestUrl = 'http://gateway.marvel.com:80/v1/public/characters?limit=100&apikey=50f1baf21e1535c08fef3b992e928123';

/// Start Working on Stuff - String matches HTML 'ng-controller'
mainApp.controller('MController1', function ($scope, $http) {

//////////// LIST CHARACTERS SECTION /////////////     
    $scope.findem = '';
    
    $scope.heroes = [];
    $http({
        method: 'get',
        url: requestUrl,
    }).then(function (response) {
        console.log(response.data.data.results);
        $scope.heroes = response.data.data.results;
    });
     
//////////// INDIVIDUAL DETAILS SECTION ////////////    
    $scope.indy = {};
    $scope.viewDetail = function(input) {
        console.log('You clicked on ' + input);
        $http({
            method: 'get', 
            url:'http://gateway.marvel.com:80/v1/public/characters/'+input+'?apikey=50f1baf21e1535c08fef3b992e928123',
        }).then(function(response) {
            console.log(response.data.data.results);
            $scope.indy = response.data.data.results[0];
            console.log(response.data.data.results[0].events.items);
        });
    }; 
});