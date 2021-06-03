//função para interação entre as páginas de ambiente// 
function catalago(id, id2){
    var ambiente = document.getElementById(id)
    ambiente.classList.add('active')
    document.getElementById('principal').classList.add('desactive')
    document.getElementById(id2).addEventListener('click', function(){
        ambiente.classList.remove('active')
        document.getElementById('principal').classList.remove('desactive')
    })
}


var card = document.querySelector('.rounded .mx-auto .d-block') //pega o card com a imagem principal no portifolio
var i = 0 //posição do elemento na lista

//foto dos ambientes
var array_sala= ['sala-1.png', 'sala-2.png', 'sala-3.png', 'sala-4.png', 'sala-5.png', 'sala-6.png'] 
var array_cozinha=["cozinha-1.png", "cozinha-2.png", "cozinha-3.png", "cozinha-4.png", "cozinha-5.png", "cozinha-6.png"]
var array_banheiro=['banheiro-1.png', 'banheiro-2.png', 'banheiro-3.png', 'banheiro-4.png', 'banheiro-5.png','banheiro-6.png']
var array_quarto=['quarto-1.png', 'quarto-2.png', 'quarto-3.png', 'quarto-4.png', 'quarto-5.png', 'quarto-6.png']

var list=[] // lista vazia que irá ser substituido pelo array do ambiente selecionado
//Trocar a a foto do card principal através da seta esquerda
function preview(id){
    if(id == 'main-sala'){
        list = array_sala
        card = document.getElementById('main-sala')
    }
    if(id == 'main-cozinha'){
        list = array_cozinha
        card = document.getElementById('main-cozinha')
    }
    if(id == 'main-quarto'){
        list = array_quarto
        card = document.getElementById('main-quarto')
    }
    if(id == 'main-banheiro'){
        list = array_banheiro
        card= document.getElementById('main-banheiro')
    }
    if(i > 0){
        i--;
        console.log(i);
        return setImg();
    }
}

//Trocar a a foto do card principal através da seta direita

function next(id){
    if(id == 'main-sala'){
        list = array_sala
        card = document.getElementById('main-sala')
    }
    if(id == 'main-cozinha'){
        list = array_cozinha
        card = document.getElementById('main-cozinha')
    }
    if(id == 'main-quarto'){
        list = array_quarto
        card = document.getElementById('main-quarto')
    }
    if(id == 'main-banheiro'){
        list = array_banheiro
        card= document.getElementById('main-banheiro')
    }
    if (i < list.length);
    console.log(list.length)
    i++;
    if(i == list.length){
        i--
    }
    return setImg();
}
//trocar a imagem a partir do valor informado nas funções anteriores
function setImg(){
    console.log(list)
    if(list === array_sala){
        return card.setAttribute('src','images/sala/'+list[i]);
    }
    if(list === array_cozinha){
        return card.setAttribute('src','images/cozinha/'+list[i]);
    }
    if(list === array_quarto){
        return card.setAttribute('src','images/quarto/'+list[i]);
    }
    if(list === array_banheiro){
        return card.setAttribute('src','images/banheiro/'+list[i]);
    }
}

//trocar a imagem do card principal ao clicar na imagem - sala
img_sala = document.getElementById('main-sala')
sala1 =document.getElementById('card-sala-1')
sala1src = document.getElementById('card-sala-1').src
sala2 =document.getElementById('card-sala-2')
sala2src = document.getElementById('card-sala-2').src
sala3 =document.getElementById('card-sala-3')
sala3src = document.getElementById('card-sala-3').src
sala4 =document.getElementById('card-sala-4')
sala4src = document.getElementById('card-sala-4').src
sala5 =document.getElementById('card-sala-5')
sala5src = document.getElementById('card-sala-5').src
sala6 =document.getElementById('card-sala-6')
sala6src = document.getElementById('card-sala-6').src

sala1.addEventListener('click', function(){
    img_sala.src= sala1src
})
sala2.addEventListener('click', function(){
    img_sala.src= sala2src
}) 
sala3.addEventListener('click', function(){
    img_sala.src= sala2src
}) 
sala3.addEventListener('click', function(){
    img_sala.src= sala3src
}) 
sala4.addEventListener('click', function(){
    img_sala.src= sala4src
}) 
sala5.addEventListener('click', function(){
    img_sala.src= sala5src
})
sala6.addEventListener('click', function(){
    img_sala.src= sala6src
})  

//trocar a imagem do card principal ao clicar na imagem - cozinha
img_cozinha = document.getElementById('main-cozinha');
cozinha1 =document.getElementById('card-cozinha-1')
cozinha1src = document.getElementById('card-cozinha-1').src
cozinha2 =document.getElementById('card-cozinha-2')
cozinha2src = document.getElementById('card-cozinha-2').src
cozinha3 =document.getElementById('card-cozinha-3')
cozinha3src = document.getElementById('card-cozinha-3').src
cozinha4 =document.getElementById('card-cozinha-4')
cozinha4src = document.getElementById('card-cozinha-4').src
cozinha5 =document.getElementById('card-cozinha-5')
cozinha5src = document.getElementById('card-cozinha-5').src
cozinha6 =document.getElementById('card-cozinha-6')
cozinha6src = document.getElementById('card-cozinha-6').src

cozinha1.addEventListener('click', function(){
    img_cozinha.src= cozinha1src
})
cozinha2.addEventListener('click', function(){
    img_cozinha.src= cozinha2src
}) 
cozinha3.addEventListener('click', function(){
    img_cozinha.src= cozinha2src
}) 
cozinha3.addEventListener('click', function(){
    img_cozinha.src= cozinha3src
}) 
cozinha4.addEventListener('click', function(){
    img_cozinha.src= cozinha4src
}) 
cozinha5.addEventListener('click', function(){
    img_cozinha.src= cozinha5src
})
cozinha6.addEventListener('click', function(){
    img_cozinha.src= cozinha6src
})  

//trocar a imagem do card principal ao clicar na imagem - banheiro
img_banheiro = document.getElementById('main-banheiro');
banheiro1 =document.getElementById('card-banheiro-1')
banheiro1src = document.getElementById('card-banheiro-1').src
banheiro2 =document.getElementById('card-banheiro-2')
banheiro2src = document.getElementById('card-banheiro-2').src
banheiro3 =document.getElementById('card-banheiro-3')
banheiro3src = document.getElementById('card-banheiro-3').src
banheiro4 =document.getElementById('card-banheiro-4')
banheiro4src = document.getElementById('card-banheiro-4').src
banheiro5 =document.getElementById('card-banheiro-5')
banheiro5src = document.getElementById('card-banheiro-5').src
banheiro6 =document.getElementById('card-banheiro-6')
banheiro6src = document.getElementById('card-banheiro-6').src

banheiro1.addEventListener('click', function(){
    img_banheiro.src= banheiro1src
})
banheiro2.addEventListener('click', function(){
    img_banheiro.src= banheiro2src
}) 
banheiro3.addEventListener('click', function(){
    img_banheiro.src= banheiro2src
}) 
banheiro3.addEventListener('click', function(){
    img_banheiro.src= banheiro3src
}) 
banheiro4.addEventListener('click', function(){
    img_banheiro.src= banheiro4src
}) 
banheiro5.addEventListener('click', function(){
    img_banheiro.src= banheiro5src
})
banheiro6.addEventListener('click', function(){
    img_banheiro.src= banheiro6src
})  

//trocar a imagem do card principal ao clicar na imagem - quarto
img_quarto = document.getElementById('main-quarto');
quarto1 =document.getElementById('card-quarto-1')
quarto1src = document.getElementById('card-quarto-1').src
quarto2 =document.getElementById('card-quarto-2')
quarto2src = document.getElementById('card-quarto-2').src
quarto3 =document.getElementById('card-quarto-3')
quarto3src = document.getElementById('card-quarto-3').src
quarto4 =document.getElementById('card-quarto-4')
quarto4src = document.getElementById('card-quarto-4').src
quarto5 =document.getElementById('card-quarto-5')
quarto5src = document.getElementById('card-quarto-5').src
quarto6 =document.getElementById('card-quarto-6')
quarto6src = document.getElementById('card-quarto-6').src

quarto1.addEventListener('click', function(){
    img_quarto.src= quarto1src
})
quarto2.addEventListener('click', function(){
    img_quarto.src= quarto2src
}) 
quarto3.addEventListener('click', function(){
    img_quarto.src= quarto2src
}) 
quarto3.addEventListener('click', function(){
    img_quarto.src= quarto3src
}) 
quarto4.addEventListener('click', function(){
    img_quarto.src= quarto4src
}) 
quarto5.addEventListener('click', function(){
    img_quarto.src= quarto5src
})
quarto6.addEventListener('click', function(){
    img_quarto.src= quarto6src
})
