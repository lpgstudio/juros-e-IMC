const submit = document.getElementById('submit');


function jurosSimples() {
    const taxasST = document.getElementById('taxa').value;
    const tempoST = document.getElementById('time').value;
    const amountST = document.getElementById('amount').value;
    const result = document.getElementById('result');
    
    const taxas = parseInt(taxasST);
    const tempo = parseInt(tempoST);
    const amount = parseInt(amountST);
    
    const calc = amount + (amount * taxas/100 * tempo)

    result.textContent = `R$ ${calc}`;
   
    console.log(calc) 
}





submit.addEventListener('click', jurosSimples);


// console.log(jurosComposto(10, 0, 10, 10 / 100))


