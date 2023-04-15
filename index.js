const jokesPara = document.querySelector(".jokes");
const jokesBtn = document.querySelector(".jokes_btn");

const  generateJoke = () =>{
 
    const setHeader = {
        headers: {
            Accept:"application/json"
        }
    }
    fetch("https://icanhazdadjoke.com", setHeader)
     .then((res) => res.json())
     .then((data) => {
        jokesPara.innerHTML = data.joke;
     }).catch((error) =>{
        console.log(error);
     })
}

jokesBtn.addEventListener('click', generateJoke)