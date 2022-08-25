window.addEventListener("load",inicio,true);



function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value=this.value.toLowerCase();
    }, true);
    document.getElementById("encriptar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;         
        document.getElementById("mensajeEncriptado").value= encriptar(texto);
        mensaje.value = "";
    }, true);
    document.getElementById("desencriptar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value; 
    document.getElementById("mensajeEncriptado").value= desencriptar(texto);
    mensaje.value = "";
    }, true);
    document.getElementById("verButton").addEventListener("click", function(){
        copiarTexto(document.getElementById("mensajeEncriptado").value);
        
    
       
    }, true)
    document.getElementById("button4").addEventListener("click", function(){
      verAlert('alerta1',0);
    }, true)
}

function encriptar(texto){
    
    
    let matrizVocales = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i< matrizVocales.length; i++){
        if(texto.includes(matrizVocales[i][0])){
            texto = texto.replaceAll(matrizVocales[i][0],matrizVocales[i][1] );

        }
        if(texto){
            document.getElementById("verButton").style.display = 'flex';
            mensajeEncriptado.style.backgroundImage = 'none';
        }

        }

    
    return texto;
    
}

function desencriptar(texto){
    let matrizVocales = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    for(let i = 0; i< matrizVocales.length; i++){
        if(texto.includes(matrizVocales[i][1])){
            texto = texto.replaceAll(matrizVocales[i][1],matrizVocales[i][0] );

        }
        if(texto){
            document.getElementById("verButton").style.display = 'flex';
            mensajeEncriptado.style.backgroundImage = 'none';
        }
    }
    return texto;

}function verAlert(m,s){
    objeto = document.getElementById(m);
    if (s==1)objeto.style.display='block';
    if(s==0)objeto.style.display='none';
}


function copiarTexto(texto){ 
    navigator.clipboard.writeText(texto).then((res) => verAlert('alerta1',1)).catch((err) => verAlert('alerta1',1) );
    mensajeEncriptado.value = ""; 
    document.getElementById("verButton").style.display = 'none';
    mensajeEncriptado.style.backgroundImage = 'url(image/Muñeco.png) ';

    
}