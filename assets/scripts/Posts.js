function fazPost(url, body){
    console.log("Body=", body)
    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body));

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}

function cadastrarRio(){
    event.preventDefault()
    let url = "http://ec2-34-229-78-246.compute-1.amazonaws.com:8080/rio/cadastrarRio"
    let name = document.getElementById("nome").value
    let endereco = document.getElementById("endereco").value
    let latitude = document.getElementById("latitude").value
    let longitude = document.getElementById("longitude").value
    let potencialHidrogenico = document.getElementById("potencialHidrogenico").value
    let oxigenioDissolvido = document.getElementById("oxigenioDissolvido").value
    let temperatura = document.getElementById("temperatura").value
    let condutividade = document.getElementById("condutividade").value
    let salinidade = document.getElementById("salinidade").value
    let turbidez = document.getElementById("turbidez").value
    console.log(name)
    console.log(endereco)
    console.log(latitude)
    console.log(longitude)
    console.log(potencialHidrogenico)
    console.log(oxigenioDissolvido)
    console.log(temperatura)
    console.log(condutividade)
    console.log(salinidade)
    console.log(turbidez)
    
    body = {
        "nome": name,
        "endereco": endereco,
        "latitude": latitude,
        "longitude": longitude,
        "potencialHidrogenico": potencialHidrogenico,
        "oxigenioDissolvido": oxigenioDissolvido,
        "temperatura": temperatura,
        "condutividade": condutividade,
        "salinidade": salinidade,
        "turbidez": turbidez
    }

    fazPost(url, body)

    alert("Rio cadastrado!")
}

function cadastrarUsuario(){
    event.preventDefault()
    let url = "http://ec2-34-229-78-246.compute-1.amazonaws.com:8080/usuario/cadastrarUsuario"
    let name = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    console.log(name)
    console.log(email)
    console.log(senha)
    
    body = {
        "nome": name,
        "email": email,
        "senha": senha
    }

    fazPost(url, body)

    alert("Usuário cadastrado!")
}