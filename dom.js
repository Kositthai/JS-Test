const btn = document.getElementById('btn')

function addelement() {
    const h1 = document.createElement('h1')
    h1.innerHTML = 'Javascript test'; 
    document.body.style.backgroundColor = 'lightblue'; 
    
    btn.appendChild(h1)
}

btn.addEventListener('click', addelement)