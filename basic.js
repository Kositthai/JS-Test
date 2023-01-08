const dishLists = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup', 'Salmon']; 

function printDishes() {
    for(let i = 0; i < dishLists.length; i++){
        console.log(dishLists[i])
    }
}
function randomDishes() {
    const randomNumber = Math.floor(Math.random() * dishLists.length)
    console.log(dishLists[randomNumber])   
}

printDishes()
randomDishes()