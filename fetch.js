let endpoint = `https://restcountries.eu/rest/v2/all`;
let options = {
    method: 'GET'
    // headers: {
    //     'Content-type': 'applications/json',
    // },
};

let flags = document.querySelector('#list ul');
let names = document.querySelector('.list p');

fetch(endpoint, options)
    .then((response) => response.json())
    .then((results) => {
        console.log(results);
        results.forEach((result) => {
            const li = document.createElement('li');
            const p = document.createElement('p');
            const img = document.createElement('img');
            const text = document.createTextNode(result.name);

            img.setAttribute('src', result.flag);
            li.appendChild(text);
            li.appendChild(img);
            flags.appendChild(li);


        });
    })
    .catch((error) => console.log(error));