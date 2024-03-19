let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if(count>4){
        count=1;
    }

document.getElementById("radio"+count).checked = true;

}

function mudarImagemEsquerda() {
    const container = document.querySelector(".container");
    const posicaoAtual = container.scrollLeft;
    container.scrollLeft = posicaoAtual - 1280;
  }
  
  function mudarImagemDireita() {
    const container = document.querySelector(".container");
    const posicaoAtual = container.scrollLeft;
    container.scrollLeft = posicaoAtual + 1280;
  }