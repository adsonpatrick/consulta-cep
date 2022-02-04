const cep = document.querySelector("#cep");

const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

const ShowData = (result) =>{
    for (const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo];
        }

        
    }
}

cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    console.log(search);

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json()
        .then(data =>{
            console.log(data)
            ShowData(data)
        })
    })

    

    .catch(e => {
        console.log("ERRO: "+e)
    })
})