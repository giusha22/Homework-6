let array = [
    {
        id: 1,
        name: "Giorgi",
        lastName: "Mtsituri",
        age: 25
    },
    {
        id: 2,
        name: "Goga",
        lastName: "Matsabadze",
        age: 30
    },
    {
        id: 3,
        name: "Viqtor",
        lastName: "Shabadze",
        age: 28
    },
]

let name2 = document.querySelector(".name");
let lastname = document.querySelector('.lastname');
let age = document.querySelector('.age')
let sometext = document.getElementById("sometext");
let next = document.querySelector('.next');
let privous = document.querySelector('.privous')
let index = 0;
let previousIndex = 0

    

// const humainInfo = (item)=>{
//     const person = array[item];
//     console.log(person);
//     name2.textContent = person.name;
//     lastname.textContent = person.lastName;
//     age.textContent = person.age;

// }
// humainInfo()

next.addEventListener('click',()=>{
    if(index >= array.length){
        index = 0;
    }
    console.log(array[index]);
    name2.innerHTML = array[index].name
    lastname.innerHTML = array[index].lastName
    age.innerHTML = array[index].age    
    index++;
})


privous.addEventListener('click',()=>{
    if(previousIndex < 0){
        previousIndex = array.length -1;
    }
    console.log(array[previousIndex]);
    
    name2.innerHTML = array[previousIndex].name;
    lastname.innerHTML = array[previousIndex].lastName;
    age.innerHTML = array[previousIndex].age;
    previousIndex--;  

})







// index++; // index = index +1