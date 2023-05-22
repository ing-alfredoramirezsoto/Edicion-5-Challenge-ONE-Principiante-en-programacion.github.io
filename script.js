const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".m-encriptado");
const copiarBoton = document.querySelector(".copiar");

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = 'none';
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptado;
}

copiarBoton.addEventListener("click", () => {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
      .then(() => {
        alert("¡Texto copiado!");
        mensaje.value = "";
        mensaje.style.backgroundImage = 'url("/img/casual-life.png")';
      })
      .catch((error) => {
        console.error("Error al copiar el texto:", error);
      });
  });

  mensaje.addEventListener('input', function() {
    // Si el textarea está vacío
    if (mensaje.value === '') {
        // Muestra la imagen
        mensaje.style.backgroundImage = 'url("/img/casual-life.png")';
    } else {
        // En caso contrario, oculta la imagen
        mensaje.style.backgroundImage = 'none';
    }
});