
var app = angular.module('olympiean',[]);

app.controller('athlete',function($scope, $http){


  var getBoxers ={
    method: 'GET',
    url: '/boxing'
  };

  function successHandle(response) {
  $scope.athlete = response.data;
  console.log('Success:', response);
  }
  function faliureHandle(response) {

  console.log('Failure:', response);
  }

  $scope.getAthlete  = function getAthlete(){
    $http(getBoxers).then(successHandle, faliureHandle);
  }


});
