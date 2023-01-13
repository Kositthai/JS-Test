// Programming Basics //

const dishesList = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon']; 

function printDishes() {
    for(let i = 0; i < dishesList.length; i++){
        console.log(dishesList[i]); 
    }
}

function randomDish() {
    const randomNumber = Math.floor(Math.random() * dishesList.length); 
    console.log(dishesList[randomNumber]);    
}

printDishes()
randomDish()

// DOM manipulation // 

const btn = document.getElementById('btn'); 
const h1 = document.createElement('h1');
h1.innerHTML = 'Javascript test'; 

function displayJSTestText() {  
    document.body.style.backgroundColor = 'lightblue';  
    btn.appendChild(h1); 
}

btn.addEventListener('click', displayJSTestText)

// Async API calls //

const asyncFunc = async() => {
    const response = await fetch('https://reqres.in/api/users')
    const data = await response.json()

    data.data.map(element => {
        const para = document.createElement('p')
        para.innerHTML = element.first_name; 
        document.body.appendChild(para); 
    });          
}

asyncFunc()

// // Class (optional) // 

class Person {
    constructor(firstname){
        this.firstname = firstname; 
    }

    sayHello(){
        console.log(`Hello my name is ${this.firstname}`)
    }
}

const vipavee = new Person('Vipavee'); 
vipavee.sayHello(); 
