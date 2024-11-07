//server side js

document.querySelector('button').addEventListener('click', getQuote)

function getQuote(){

    let param = document.querySelector('input').value
    let url = `https://beautiful-quotes-api.onrender.com/api/${param}` //put actual link here

    fetch(url)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
             console.log(data)
            //  let quote = data[beautifulQuotes.quotes]
            document.querySelector('#name').innerText = data.name
            document.querySelector('#type').innerText = data.type
             document.querySelector('#quote').innerText = data.quote
        }
    )

}
