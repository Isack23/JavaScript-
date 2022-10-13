function consultar() {

    var txtpais = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')
    var pais = (txtpais.value)
    res.innerHTML = `<p><strong>Voce mora no: ${pais.toUpperCase()}!</strong></p>`
   
    if (pais == 'brasil'){
        res.innerHTML +=`<p><strong>Voce é Brasileiro</strong></p>`
    }
    else {
        res.innerHTML =`<p><strong>Estrangeiro</strong></p>`
    }
}