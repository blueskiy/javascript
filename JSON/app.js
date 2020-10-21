let person = {
  name:'Brad',
  age:35,
  address: {
    street: '5 main st',
    city: 'Boston'
  },
  children: ['Brianna', 'Nicholas'] 
  // email: function() {
  //   return 'brag@gmail.com';
  // }
}

let people = [
  {
    name:'Brad',
    age:35
  },
  {
    name:'John',
    age:40
  },
  {
    name:'Sara',
    age:25
  }
]

//transforma em string
// person = JSON.stringify(person);
//analisa a string e constrói o dado que ela representa
// person = JSON.parse(person);

console.log(person);
console.log(person.address.street);
console.log(person.children[0]);

console.log(people[2].age);

let output = '';
for(let i = 0; i< people.length; i++) {
  console.log(people[i]);
  output += `<li>${people[i].name}</li>`;
}
document.getElementById('people').innerHTML = output;

//pegando os dados do JSON
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    //typical action to be performed when the document is ready:

    let response = JSON.parse(xhttp.responseText);
    let otherPeople = response.otherPeople;
    console.log(response.otherPeople);

    output = '';

    for(let i = 0; i< otherPeople.length; i++) {
      // console.log(people[i]);
      output += `<li>${otherPeople[i].name}</li>`;
    }
    document.getElementById('people2').innerHTML = output;
  }
};
xhttp.open("GET", "people.json", true);
xhttp.send();