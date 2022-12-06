function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText
}

function main(){
    data = fazGet("http://ec2-34-229-78-246.compute-1.amazonaws.com:8080/rio/");
    rios = JSON.parse(data)
    console.log(rios)
}

main()