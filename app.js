var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let java = document.getElementById("java");
crearBarra(java);
let excel = document.getElementById("excel");
crearBarra(excel);
let python = document.getElementById("python");
crearBarra(python);

//arreglo para cada barra, en -1 porque al inicio no hay ni una pintada
let contadores = [-1,-1,-1,-1];
let entro = false;

//animacion
function efectohabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 15, 0, intervalHtml);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 11, 1, intervalJava);
        },100);
        const intervalExcel = setInterval(function(){
            pintarBarra(excel, 15, 2, intervalExcel);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 10, 3, intervalPython);
        },100);
    }
}

        
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#B2D3D5"
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}