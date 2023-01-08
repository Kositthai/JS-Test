const displayFirstName = document.getElementById('displayFirstname'); 

const asyncFunc = async() => {
    const response = await fetch('https://reqres.in/api/users')
    const data = await response.json()
    console.log(data)

    const display = data.map(element => console.log(element.first_name))
   
}


asyncFunc()

displayFirstName.addEventListener('click', asyncFunc)