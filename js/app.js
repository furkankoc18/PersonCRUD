let app = angular.module('App', ['ngRoute', 'ngStorage']);

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
      templateUrl: 'views/HomePage.html',
      controller: 'AppController'
    })
      .when('/login', {
      templateUrl: 'views/LoginPage.html',
      controller: 'AppController'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);

app.controller('AppController', ['$scope', '$localStorage', '$sessionStorage', function($scope, $localStorage, $sessionStorage) {

  let cityList = $scope.cityList;
  $scope.personList = [];
  $scope.personList = $localStorage.personList;

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
    },
    {
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

  $scope.birthYearList = [{
      'birthYearID': 1,
      'birthYear': 1996
    },
    {
      'birthYearID': 2,
      'birthYear': 1997
    },
    {
      'birthYearID': 3,
      'birthYear': 1998
    },
    {
      'birthYearID': 4,
      'birthYear': 1999
    }
  ];

  $scope.init = function() {
    //init metod
    console.log("init running");
  };

  $scope.addPerson = function(person) {
    person.isPasive = true;
    let personObj = new Person(person.name, person.surname, person.birthYear, person.country, person.city, person.password, person.isPasive);
    $scope.personList.push(personObj);
    $localStorage.personList = $scope.personList;
  };

  $scope.removePerson = function(index) {
    $scope.personList.splice(index, 1);
  };

  $scope.changeCountry = function(countryID) {
    $scope.cityList = [];
    for (i = 0; i < cityList.length; i++) {
      if (cityList[i].countryID == countryID) {
        $scope.cityList.push(cityList[i]);
      }
    }
  };

  $scope.changeCountryEdit = function(countryName) {

    $scope.cityListEdit = [];
    let id;
    for (let i = 0; i < $scope.countryList.length; i++) {
      if ($scope.countryList[i].name == countryName) {
        id = $scope.countryList[i].countryID;
      }
    }
    for (let i = 0; i < cityList.length; i++) {
      if (cityList[i].countryID == id) {
        $scope.cityListEdit.push(cityList[i]);
      }
    }
  };


  $scope.editPerson = function(personIndex) {
    $scope.personList[personIndex].isPasive = false;
  };

  $scope.updatePerson = function(personIndex) {
    $scope.personList[personIndex].isPasive = true;
  }
}]);
