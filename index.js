var setad = window.document.getElementById("seta-d")
var c1 = window.document.getElementById("c1")
var c2 = window.document.getElementById("c2")
var c3 = window.document.getElementById("c3")
var setae = window.document.getElementById("seta-e")

function rolarDireita() {
    c1.style = "display:none"
    c3.style = "display:flex"
    setad.style = "display:none"
    setae.style = "display:flex; margin-top:45px"
}

function rolarEsquerda() {
    c1.style = "display:flex"
    c3.style = "display:none"
    setad.style = "display:flex"
    setae.style = "display:none" 
}