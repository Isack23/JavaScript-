var area = document.getElementById('area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    
    area.innerText = 'clicou'
    area.style.background = 'green'
    }
function entrar() {
    area.innerText = 'entrou'
    area.style.background = 'aqua'
}
function sair() {
    area.innerText = 'saiu'
    area.style.background = 'red'
    
}