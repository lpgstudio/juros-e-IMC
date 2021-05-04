const submit = document.getElementById('submit');

function calcIMC(){
    const result = document.getElementById('result');
  //  const name = document.getElementById('name').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificacaoIMC = "";
    
    if(valorIMC <= 18.4){
        classificacaoIMC = "abaixo do peso";
    }else if(valorIMC <= 24.9){
        classificacaoIMC = "com seu peso ideal. Parabéns!";
    }else if(valorIMC <= 29.9){
        classificacaoIMC = "sobrepeso";
    }else if(valorIMC <= 34.9){
        classificacaoIMC = "obesidade gral I";
    }else if(valorIMC <= 39.9){
        classificacaoIMC = "obesidade gral II";
    }else {
        classificacaoIMC = "obesidade gral III. Cuidado!";
    };

 result.textContent = `Seu IMC é ${valorIMC} e você está ${classificacaoIMC}`
}

   

submit.addEventListener("click", calcIMC)