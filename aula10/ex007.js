function media() {
    var nome = document.getElementById("nome")
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    
     
    var media = (n1 + n2) / 2 
    res.innerHTML = ` Sua media é: <strong>${media}</strong>`
    

}