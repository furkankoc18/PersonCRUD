let app = angular.module('App', ['ngRoute']);

function Person(name, surname, birthYear, country, city, password, isPasive) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.country = country;
  this.city = city;
  this.password = password;
  this.isPasive = isPasive;
}

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'views/homepage.html',
      controller: 'AppController'
    })
    .otherwise({
      redirectTo: '/'
    })
}])

app.controller('AppController', ['$scope', function($scope) {

  $scope.countryList = [{
      'countryID': 1,
      'name': 'Türkiye'
    },
    {
      'countryID': 2,
      'name': 'Amerika'
    }
  ];

  $scope.cityList = [{
      'cityID': 34,
      'countryID': 1,
      'name': 'İstanbul'
    }, {
      'cityID': 18,
      'countryID': 1,
      'name': 'Çankırı'
    },
    {
      'cityID': 10,
      'countryID': 2,
      'name': 'New York'
    },
    {
      'cityID': 34,
      'countryID': 2,
      'name': 'Chicago'
    }
  ];
  let personList = [];
  let cityList = $scope.cityList;
  $scope.addPerson = function(person) {
    let personObj = new Person(person.name, person.surname, person.birthYear, person.country, person.city, person.password, person.isPasive);
    personList.push(personObj);
  };
  $scope.personList = personList;

  $scope.changeCountry = function(countryID) {
    $scope.cityList = [];
    for (i = 0; i < cityList.length; i++) {
      if (cityList[i].countryID == countryID) {
        $scope.cityList.push(cityList[i]);
      }
    }
  }


}])
