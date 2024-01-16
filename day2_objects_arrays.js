var person = {
    // property: value
    name: "John",
    age: 18,
    favcolor: "black"
};

//accessing objects value via properties
var personvalue = person.name;
let x = person.name;
console.log(x);
console.log(person['age']);
console.log(person.favcolor);

// document.write("Say hi to Javascript!...");


//constructor function
function constfunction(name, age, favcolor){
    this.name = name;
    this.age = age;
    this.favcolor = favcolor;
}

var p1 = new constfunction('Vasanth', 18, 'black');
var p2 = new constfunction('John', 19, 'white');

console.log(p1.name);
console.log(p2.name);


//arrays in JS
var courses = new Array('c++', 'JAVA', "PYTHON");
courses[2] = "JavaScript";
//var courses = courses[2] = 'JavaScript';  entire array is replaced with the index 2 element
console.log(courses);


//otherways to create arrays in js

var climate = new Array(3);
climate[0] = 'Summer';
climate[1] = 'Winter';
climate[2] = 'Spring';
console.log(climate[1]);
console.log("Length of Climete array is :"+climate.length);

//concating two arrays
var climate = climate.concat(courses);
console.log(climate);

var d = new Date();
var hrs = d.getHours();
console.log("Date is :"+d);
if(hrs<12) {
    console.log("Hour is: "+hrs+" am");
} else {
    console.log("Hour is: "+hrs+" pm");
}


