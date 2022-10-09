// 1. 
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  function create_object(title, studio, rating) {
    return new Movie(title, studio, rating);
  }
  
  function getPG(list) {
    return list.filter((film) => film.rating === "PG");
  }
  
  let film1 = new Movie("Lion King", "Simba", "G");
  let film2 = new Movie("La Casa De Papel", "Netflix");
  let film3 = new Movie("The 100", "NCS", "PG13");
  let film4 = new Movie("Siren", "Box Office");
  let film5 = new Movie("ZOO", "Lions Gate");
  
  console.log(film1);
  console.log(film2);
  console.log(getPG([film1, film2, film3, film4, film5]));
  
  
  let film = create_object("Casino Royale", "Eon Productions", "PG13");
  console.log(film);
  


// 2.
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColor() {
      return this.color;
    }
    setColor(color) {
      this.color = color;
    }
    toString() {
      return `Circle [radius=${this.radius},color=${this.color}]`;
    }
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  let c1 = new Circle(Math.ceil(Math.random() * 5), "green");
  c1.setRadius(2.5);
  console.log(c1.getRadius());
  c1.setColor("pink");
  console.log(c1.getColor());
  console.log(c1.toString());
  console.log(c1.getArea());
  console.log(c1.getCircumference());

  
// 3.
class Person {
    constructor(name, technology, experience_years, email, phone, ...languages) {
      this.name = name;
      this.technology = technology;
      this.experience_years = experience_years;
      this.email = email;
      this.phone = phone;
      this.languages = languages;
    }
  }
  
  let dh = new Person(
    "Dharun Gandhi",
    "Full Stack Developer",
    1,
    "dha@gmail.com",
    8328073469,
    "python",
    "javascript",
    "Bootstrap",
    "reactJS",
    "nodeJS",
    "mongoDB",
    "HTML5",
    "CSS3"
  );
  
  console.log(dh);
  


// 4. 
class Uber {
    // car types : mini(3 seater) or prime(4 seater) or jumbo(7 seater)
    constructor(car_type, km, ac = false) {
      this.car_type = car_type;
      this.km = km;
      this.ac = ac;
      this.service_charge = 12;
      this.booking_fee = 10;
      this.tax = this.service_charge + this.booking_fee;
    }
  
    // get the price per km based on car type
    getprice() {
      if (this.ac != false) this.ac = 1;
      else this.ac = 0;
      if (this.car_type == "mini") return (10 + this.ac) * this.km + this.tax;
      else if (this.car_type == "prime")
        return (8.5 + this.ac) * this.km + this.tax;
      return (8 + this.ac) * this.km + this.tax;
    }
  }
  
  let mini_ac = new Uber("mini", 10, true);
  console.log(`Charge for mini AC car for 10KM is : ${mini_ac.getprice()}`);
  let mini_non_ac = new Uber("mini", 10);
  console.log(
    `Charge for mini non AC car for 10KM is : ${mini_non_ac.getprice()}`
  );
  let prime_ac = new Uber("prime", 10, true);
  console.log(`Charge for prime AC car for 10KM is : ${prime_ac.getprice()}`);
  let prime_non_ac = new Uber("prime", 10);
  console.log(
    `Charge for prime non AC car for 10KM is : ${prime_non_ac.getprice()}`
  );
  let jumbo_ac = new Uber("jumbo", 10, true);
  console.log(`Charge for jumbo AC car for 10KM is : ${jumbo_ac.getprice()}`);
  let jumbo_non_ac = new Uber("jumbo", 10);
  console.log(
    `Charge for jumbo non AC car for 10KM is : ${jumbo_non_ac.getprice()}`
  );
  