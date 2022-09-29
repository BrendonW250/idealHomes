
//create click event for button on signup page

document.querySelector('button').addEventListener('click', createAccount)

async function createAccount(){
    const userInfo = document.querySelector('input').value

    try{
        const response = await fetch(`https://bronx-dementia-homes.herokuapp.com/${userInfo}`)
        const data = await response.json()

        console.log(data)




    }catch(error){
        console.log(error)
    }
}