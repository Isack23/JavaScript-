function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60) {
    res.innerHTML += `<p>Você foi multado por excesso de velocidade!</p>`
}
    else {
    res.innerHTML = `<p>Diriga sempre com cinto de segurança!</p>`
}
}