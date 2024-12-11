var botao = document.querySelectorAll('.classebotao');

botao.forEach(function(botao){
    botao.addEventListener('mouseover', function(){
        console.log('mouse está dentro')
        botao.classList.add('sobrebotao')
    })
    botao.addEventListener('mouseout', function(){
        console.log('mouse está dentro')
        botao.classList.remove('sobrebotao')
    })
   
   
})
