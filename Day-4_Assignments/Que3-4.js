// Array of objects

let people = [
  {
    name: "Saniya",
    age: 20,
    country: "India",
    hobbies: ['dancing','painting','singing'],
  },
  {
    name: "Maria",
    age: 32,
    country: "South Africa",
    hobbies: ['swimming','cycling','dancing'],
  },
  {
    name: "John",
    age: 50,
    country: "USA",
    hobbies: ['reading','writing'],
  },
  {
    name: "LeeMinHoo",
    age: 24,
    country: "Japan",
    hobbies: ['acting','singing','dancing'],
  }
];
// 1
console.log(people);

// 2
function all(){
  people.forEach(function (each){
    console.log(each);
  });
}

// 3
function fun1(){
  people.forEach(function (ages){
    if (ages.age<30)
    {
      console.log(ages);
    }
  });
}


// 4
function fun2(){
  for(let i=0; i<people.length; i++){
    if(people[i].country == "India")
    {
      console.log(people[i]);
    }
  }
}

all();
fun1();
fun2();
