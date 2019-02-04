export class Person {
  var name;
  var surname;
  var birthYear;
  var country;
  var city;
  var password;

  constructor() {

  }
  constructor(name, surname, birthYear, country, city, password) {
    console.log("Person yapıcı oluştu");
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.country = country;
    this.city = city;
    this.password = password;
  }

}
