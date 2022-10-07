var corpo = document.body
var p1 = document.getElementsByTagName('p')[1] 

//id
//var d = document.getElementById('msg')
//d.style.background = 'green'
//d.innerText = 'Estou aguardando...'

//nome
//var d = document.getElementsByName('msg')[0]
//d.innerText = 'Olá!'

//classe nome
//var d = document.getElementsByClassName('msg')[0]
//d.style.background ='blue' 
//d.innerHTML = 'Estou aguardando...'

//seletor 
var d = document.querySelector('div#msg') //#-id / .-classe
d.style.background = 'green'
