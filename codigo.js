const button = document.getElementById("lanzar");

button.addEventListener("click",(e)=>{
    e.preventDefault();
    let random = Math.floor(Math.random() * (3 - 1)) + 1;

    if(random == 1){
        document.getElementById("imagenMoneda").src="pcara.png";
    } else if (random == 2){
        document.getElementById("imagenMoneda").src="paguila.png";
    } else{
        console.log("Error");
    }
});