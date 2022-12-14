const url = "http://aquavitta2.pythonanywhere.com/usuarios";

const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

async function getUsuario(){
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);
}

if(!postId){
    getUsuario();
}else {
    console.log(postId);
}