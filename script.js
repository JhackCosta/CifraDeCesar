var select = document.querySelector(".select")
var some = document.querySelector("#some")

var codificar = document.querySelector("#codificar")
var decodificar = document.querySelector("#decodificar")
var mensagem = document.querySelector("#msg")

// var texto = mensagem.value

var caixa = document.querySelector("#texto")
var passos = document.querySelector("#number")
var resultado = document.querySelector("#resultado")

//mudar mensagem do botão
codificar.addEventListener("click", function() {

    mensagem.textContent = "Codificar Mensagem!"

})

decodificar.addEventListener("click", function() {

    mensagem.textContent = "Decodificar Mensagem!"

})

//somir com os passos
select.addEventListener("change", function() {

    if (select.value != 2) {

        some.style.display = "none"

    } else {
        some.style.display = "block"
    }

})

// Codificando César
function codificarTexto(texto, adiciona) {

    var armazenar = texto.split("") // [o,i,t,u,d,o,b,e,m,?]
    var arrey = []
    var codigo = []

    for (var i = 0; i < armazenar.length; i++) {

        if (armazenar[i].charCodeAt() >= 65 && armazenar[i].charCodeAt() <= 90) { // Guarda letras maisculas

            var guardar = ((armazenar[i].charCodeAt()) - 65 + adiciona) % 26
            codigo.push(guardar + 65)

        } else if (armazenar[i].charCodeAt() >= 97 && armazenar[i].charCodeAt() <= 122) { // Guarda letras minisculas

            var guardar = ((armazenar[i].charCodeAt()) - 97 + adiciona) % 26
            codigo.push(guardar + 97)

        } else {
            codigo.push(armazenar[i].charCodeAt())
        }

    }

    for (var y = 0; codigo.length > y; y++) {

        arrey.push(String.fromCharCode(codigo[y]))
    }

    return arrey.join("")
}

function decodificarTexto(texto, adiciona) {

    var armazenar = texto.split("")
    var arrey = []
    var codigo = []

    for (let i = 0; i < armazenar.length; i++) {

        if (armazenar[i].charCodeAt() >= 65 && armazenar[i].charCodeAt() <= 90) {

            let guardar = ((armazenar[i].charCodeAt()) - 65 - adiciona) % 26
            codigo.push((guardar < 0 ? guardar + 26 : guardar) + 65)

        } else if (armazenar[i].charCodeAt() >= 97 && armazenar[i].charCodeAt() <= 122) {

            let guardar = ((armazenar[i].charCodeAt()) - 97 - adiciona) % 26
            codigo.push((guardar < 0 ? guardar + 26 : guardar) + 97)

        } else {
            codigo.push(armazenar[i].charCodeAt())
        }
    }
    for (var y = 0; codigo.length > y; y++) {
        arrey.push(String.fromCharCode(codigo[y]))
    }
    return arrey.join("")
}

/// codificando  64
function codificar64(texto) {
    var codigo = btoa(texto)
    return codigo
}

///decodificando 64
function decodificar64(texto) {
    var codigo = atob(texto)
    return codigo
}

//função de mostrar no HTML
mensagem.addEventListener("click", function(e) {

    e.preventDefault()

    if (codificar.checked) {

        if (select.value == "2") {

            resultado.innerHTML = codificarTexto(caixa.value, +passos.value)

        } else if (select.value == "3") {
            resultado.innerHTML = codificar64(caixa.value)
        } else {
            alert("Algo está errado!")
        }
    }

    if (decodificar.checked) {

        if (select.value == "2") {

            resultado.innerHTML = decodificarTexto(caixa.value, +passos.value)

        } else if (select.value == "3") {

            resultado.innerHTML = decodificar64(caixa.value)
        } else {
            alert("Algo está errado!")
        }
    }
})